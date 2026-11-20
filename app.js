(() => {
  'use strict';

  const stage = document.querySelector('#demoStage');
  const button = document.querySelector('#trishulButton');
  const hint = document.querySelector('#interactionHint');
  const status = document.querySelector('#animationStatus');
  const replay = document.querySelector('#replayButton');
  const breeze = document.querySelector('#breeze');
  const weaponSelect = document.querySelector('#weaponSelect');
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const touchDevice = matchMedia('(hover: none)');
  const state = { hovered: false, focused: false, pinned: false, preview: false };
  const animationChoices = [...document.querySelectorAll('[data-animation-choice]')];
  const animationDetails = {
    original: {
      subtitle: 'Twin forms. One graceful reveal.',
      description: 'Two {forms} rise from the center'
    },
    joined: {
      subtitle: 'Two forms. One unbroken handle.',
      description: 'Joined {forms}, pointing left and right'
    },
    'open-center': {
      subtitle: 'Two fine lines. One unbroken handle.',
      description: 'An open center reveals the joined handle'
    }
  };
  const weaponDetails = {
    trishul: {
      name: 'Trishul', plural: 'trishuls', upright: window.createTrishulArt, joined: window.createJoinedTrishulArt,
      eyebrow: 'GOLD. VERMILION. A LITTLE WIND.', motion: 'Breeze', activeStatus: 'THE BREEZE IS ALIVE',
      noteTitle: 'Feel the breeze', noteCopy: 'Silk ribbons ripple in the wind', material: 'Crafted in gold & vermilion',
      reference: 'reference.png', referenceAlt: 'A golden trishul with a damaru and red cloth against a circular gold mandala.',
      referenceCopy: 'The gold trishul, damaru, and vermilion cloth, recreated with moving silk.',
      icon: '<path d="M16 3v34M6 9C-1 29 33 29 26 9M16 3l-4 10m4-10 4 10"/><circle cx="16" cy="28" r="2.5" fill="currentColor"/>'
    },
    vajra: {
      name: 'Vajra', plural: 'vajras', upright: window.createVajraArt, joined: window.createJoinedVajraArt,
      eyebrow: 'SILVER. SAPPHIRE. A SPARK.', motion: 'Charge', activeStatus: 'THE STORM IS AWAKE',
      noteTitle: 'Feel the charge', noteCopy: 'Blue lightning dances over polished steel', material: 'Cast in silver & sapphire',
      reference: 'reference-vajra.png', referenceAlt: 'A sculpted silver and gold Vajra with blue jeweled collars against a lightning-filled sky.',
      referenceCopy: 'The sculpted steel blade, gold bindings, and blue jewels, recreated with a flicker of lightning.',
      icon: '<path d="M16 2l4 12-4 8-4-8zM8 11C1 24 9 28 16 22c7 6 15 2 8-11M16 22v15M12 28h8M12 32h8"/>'
    },
    astra: {
      name: 'Astra', plural: 'astras', upright: window.createAstraArt, joined: window.createJoinedAstraArt,
      eyebrow: 'GOLD. TURQUOISE. A LIVING FLAME.', motion: 'Flame', activeStatus: 'THE FLAME IS ALIVE',
      noteTitle: 'Feel the flame', noteCopy: 'Fire ripples around a jeweled gold chakra', material: 'Forged in gold & fire',
      reference: 'reference-astra.png', referenceAlt: 'A fiery golden Astra with an ornate circular chakra, blue petal inlays, and a blazing spear tip.',
      referenceCopy: 'The blazing spear, carved golden chakra, and turquoise petal inlays, recreated with living fire.',
      icon: '<path d="M16 2l4 13-4 7-4-7zM16 23v14M12 29h8M12 34h8"/><ellipse cx="16" cy="22" rx="11" ry="6"/><ellipse cx="16" cy="22" rx="7" ry="3"/>'
    }
  };
  let currentWeapon = 'trishul';
  let illustrations = [];
  let dynamicAnimations = [];
  let previewTimer;
  let pauseTimer;

  const petals = Array.from({ length: 24 }, (_, index) => `<g transform="rotate(${index * 15} 200 200)"><path d="M200 41C181 61 181 74 200 88C219 74 219 61 200 41Z"/><path d="M200 48C190 62 189 70 200 79C211 70 210 62 200 48Z"/><path d="M200 93C185 109 189 118 200 126C211 118 215 109 200 93Z"/><circle cx="200" cy="32" r="2"/><circle cx="200" cy="134" r="1.5"/></g>`).join('');
  document.querySelector('#mandala').innerHTML = `<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width=".65"><circle cx="200" cy="200" r="172"/><circle cx="200" cy="200" r="164"/><circle cx="200" cy="200" r="112"/><circle cx="200" cy="200" r="104"/><circle cx="200" cy="200" r="70"/>${petals}</g></svg>`;

  document.querySelector('#goldDust').innerHTML = Array.from({ length: 18 }, (_, index) => {
    const side = index % 2 ? 1 : -1;
    return `<i class="dust-particle" style="--dx:${side * (125 + (index * 31) % 145)}px;--dy:${-115 + (index * 37) % 215}px;--delay:${(index * .17).toFixed(2)}s;--duration:${(2.4 + index % 4 * .3).toFixed(1)}s"></i>`;
  }).join('');

  function render() {
    const active = Object.values(state).some(Boolean);
    clearTimeout(pauseTimer);
    stage.classList.toggle('is-awake', active);
    button.setAttribute('aria-pressed', String(state.pinned));
    status.textContent = active ? weaponDetails[currentWeapon].activeStatus : 'READY WHEN YOU ARE';
    hint.textContent = active ? (touchDevice.matches ? 'Tap again to return' : 'Stay a little longer') : (touchDevice.matches ? 'Tap to awaken' : 'Hover to awaken');
    if (active && !motionPreference.matches) {
      illustrations.forEach(svg => {
        const belongsToJoined = svg.classList.contains('joined-trishul-illustration');
        if (belongsToJoined === (stage.dataset.animation !== 'original')) svg.unpauseAnimations();
        else svg.pauseAnimations();
      });
    } else pauseTimer = setTimeout(() => illustrations.forEach(svg => svg.pauseAnimations()), active ? 0 : 900);
  }

  function endPreview() {
    clearTimeout(previewTimer);
    state.preview = false;
  }

  function playPreview() {
    endPreview();
    // A fresh reveal also makes Replay useful while the scene is already open.
    state.hovered = false;
    state.focused = false;
    state.pinned = false;
    render();
    illustrations.forEach((svg, index) => svg.setCurrentTime((index % 2) * .8));
    previewTimer = setTimeout(() => {
      state.preview = true;
      render();
      previewTimer = setTimeout(() => { state.preview = false; render(); }, 5200);
    }, 300);
  }

  button.addEventListener('pointerenter', event => {
    if (event.pointerType === 'touch') return;
    endPreview();
    state.hovered = true;
    render();
  });
  button.addEventListener('pointerleave', event => {
    if (event.pointerType === 'touch') return;
    state.hovered = false;
    state.pinned = false;
    render();
  });
  button.addEventListener('focus', () => {
    if (!button.matches(':focus-visible')) return;
    endPreview();
    state.focused = true;
    render();
  });
  button.addEventListener('blur', () => { state.focused = false; state.pinned = false; render(); });
  button.addEventListener('click', () => {
    endPreview();
    state.pinned = !state.pinned;
    if (touchDevice.matches) state.focused = false;
    render();
  });
  button.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      endPreview();
      Object.keys(state).forEach(key => { state[key] = false; });
      button.blur();
      render();
    }
  });
  replay.addEventListener('click', playPreview);

  function chooseAnimation(animation, updateUrl = true) {
    endPreview();
    Object.keys(state).forEach(key => { state[key] = false; });
    const details = animationDetails[animation];
    stage.dataset.animation = animation;
    animationChoices.forEach(choice => choice.setAttribute('aria-pressed', String(choice.dataset.animationChoice === animation)));
    document.querySelector('#stageSubtitle').textContent = details.subtitle;
    document.querySelector('#revealDescription').textContent = details.description.replace('{forms}', weaponDetails[currentWeapon].plural);
    render();
    if (updateUrl) persistSelection();
  }

  animationChoices.forEach(choice => choice.addEventListener('click', () => chooseAnimation(choice.dataset.animationChoice)));

  function applySpeed() {
    const speed = Number(breeze.value);
    dynamicAnimations.forEach(animation => animation.setAttribute('dur', `${Number(animation.dataset.baseDuration) / speed}s`));
    document.querySelector('#breezeValue').textContent = speed < .9 ? 'Soft' : speed > 1.35 ? 'Lively' : 'Gentle';
  }

  function persistSelection() {
    const next = new URL(location.href);
    if (currentWeapon === 'trishul') next.searchParams.delete('weapon');
    else next.searchParams.set('weapon', currentWeapon);
    next.hash = stage.dataset.animation;
    history.replaceState(null, '', next);
  }

  function chooseWeapon(weapon, updateUrl = true) {
    clearTimeout(pauseTimer);
    endPreview();
    Object.keys(state).forEach(key => { state[key] = false; });
    illustrations.forEach(svg => svg.pauseAnimations());
    currentWeapon = weapon;
    const details = weaponDetails[weapon];
    document.body.dataset.weapon = weapon;
    weaponSelect.value = weapon;
    document.title = `${details.name} — fluid motion`;
    stage.setAttribute('aria-label', `Interactive ${details.name} button animation`);
    document.querySelector('#weaponIcon').innerHTML = `<svg viewBox="0 0 32 40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${details.icon}</svg>`;
    document.querySelector('#trishulLeft').innerHTML = details.upright(`${weapon}-left`);
    document.querySelector('#trishulRight').innerHTML = details.upright(`${weapon}-right`);
    document.querySelector('#joinedTrishulLeft').innerHTML = details.joined(`${weapon}-joined-left`);
    document.querySelector('#joinedTrishulRight').innerHTML = details.joined(`${weapon}-joined-right`);
    illustrations = [...document.querySelectorAll('.trishul-illustration, .joined-trishul-illustration')];
    // The paired pieces respond to different gusts, sparks, or flames.
    illustrations.forEach((svg, index) => { svg.setCurrentTime((index % 2) * .8); svg.pauseAnimations(); });
    dynamicAnimations = [...document.querySelectorAll('.cloth-ribbon animate, animate.energy-animation')];
    dynamicAnimations.forEach(animation => { animation.dataset.baseDuration = parseFloat(animation.getAttribute('dur')); });
    applySpeed();
    document.querySelector('#artEyebrow').textContent = details.eyebrow;
    document.querySelector('#motionLabel').textContent = details.motion;
    breeze.setAttribute('aria-label', `${details.name} ${details.motion.toLowerCase()} speed`);
    document.querySelector('#motionNoteTitle').textContent = details.noteTitle;
    document.querySelector('#motionNoteCopy').textContent = details.noteCopy;
    document.querySelector('#footerMaterial').textContent = details.material;
    document.querySelector('#referenceTitle').textContent = `Your ${details.name} reference`;
    document.querySelector('#referenceImage').src = details.reference;
    document.querySelector('#referenceImage').alt = details.referenceAlt;
    document.querySelector('#referenceCopy').textContent = details.referenceCopy;
    chooseAnimation(stage.dataset.animation, false);
    render();
    if (updateUrl) persistSelection();
  }

  breeze.addEventListener('input', applySpeed);
  weaponSelect.addEventListener('change', () => chooseWeapon(weaponSelect.value));

  motionPreference.addEventListener('change', render);
  touchDevice.addEventListener('change', render);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) illustrations.forEach(svg => svg.pauseAnimations());
    else render();
  });

  const dialog = document.querySelector('#referenceDialog');
  document.querySelector('#viewReference').addEventListener('click', () => dialog.showModal());
  document.querySelector('#closeReference').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });

  const requestedAnimation = location.hash.slice(1);
  chooseAnimation(Object.hasOwn(animationDetails, requestedAnimation) ? requestedAnimation : 'open-center', false);
  const requestedWeapon = new URLSearchParams(location.search).get('weapon');
  chooseWeapon(Object.hasOwn(weaponDetails, requestedWeapon) ? requestedWeapon : 'trishul', false);
  render();
})();
