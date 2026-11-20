(function () {
  'use strict';

  function instanceId(value, variant) {
    const name = String(value || 'astra').replace(/[^a-zA-Z0-9_-]/g, '') || 'astra';
    return `${name}-${variant}`;
  }

  function definitions(id) {
    return `<defs>
      <linearGradient id="${id}-gold" x1="34" y1="80" x2="139" y2="195" gradientUnits="userSpaceOnUse">
        <stop stop-color="#713417"/><stop offset=".2" stop-color="#DDA148"/><stop offset=".36" stop-color="#FFF0AD"/><stop offset=".5" stop-color="#B66C23"/><stop offset=".72" stop-color="#F6C45F"/><stop offset="1" stop-color="#693215"/>
      </linearGradient>
      <linearGradient id="${id}-ring" x1="-58" y1="-58" x2="49" y2="52" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9D4A19"/><stop offset=".22" stop-color="#F7C15D"/><stop offset=".39" stop-color="#FFF0A5"/><stop offset=".61" stop-color="#C27627"/><stop offset=".79" stop-color="#FFD47C"/><stop offset="1" stop-color="#8D451B"/>
      </linearGradient>
      <linearGradient id="${id}-shaft" x1="84" y1="240" x2="96" y2="240" gradientUnits="userSpaceOnUse">
        <stop stop-color="#482315"/><stop offset=".2" stop-color="#A56A32"/><stop offset=".43" stop-color="#F2C57C"/><stop offset=".59" stop-color="#A76B2D"/><stop offset=".81" stop-color="#71411F"/><stop offset="1" stop-color="#321E14"/>
      </linearGradient>
      <linearGradient id="${id}-horizontal-shaft" x1="0" y1="84" x2="0" y2="96" gradientUnits="userSpaceOnUse">
        <stop stop-color="#482315"/><stop offset=".2" stop-color="#A56A32"/><stop offset=".43" stop-color="#F2C57C"/><stop offset=".59" stop-color="#A76B2D"/><stop offset=".81" stop-color="#71411F"/><stop offset="1" stop-color="#321E14"/>
      </linearGradient>
      <linearGradient id="${id}-blade" x1="74" y1="45" x2="105" y2="114" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFFCD4"/><stop offset=".26" stop-color="#FFF6A6"/><stop offset=".47" stop-color="#FFC34C"/><stop offset=".6" stop-color="#FFF8B8"/><stop offset=".79" stop-color="#D78225"/><stop offset="1" stop-color="#8E3519"/>
      </linearGradient>
      <linearGradient id="${id}-fire" x1="90" y1="18" x2="90" y2="179" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFFBC6"/><stop offset=".29" stop-color="#FFE675"/><stop offset=".6" stop-color="#FFAB20"/><stop offset="1" stop-color="#E3500E" stop-opacity=".08"/>
      </linearGradient>
      <linearGradient id="${id}-teal" x1="-8" y1="-65" x2="8" y2="-49" gradientUnits="userSpaceOnUse">
        <stop stop-color="#072E39"/><stop offset=".33" stop-color="#217D8B"/><stop offset=".5" stop-color="#A7F4F5"/><stop offset=".7" stop-color="#207384"/><stop offset="1" stop-color="#062731"/>
      </linearGradient>
      <radialGradient id="${id}-ember">
        <stop stop-color="#FFF4AE"/><stop offset=".35" stop-color="#FFC548"/><stop offset=".66" stop-color="#D96116"/><stop offset="1" stop-color="#7C3015"/>
      </radialGradient>
      <radialGradient id="${id}-aura">
        <stop stop-color="#FFD956" stop-opacity=".54"/><stop offset=".45" stop-color="#FFB11E" stop-opacity=".26"/><stop offset="1" stop-color="#FF790C" stop-opacity="0"/>
      </radialGradient>
      <filter id="${id}-glow" x="-65%" y="-40%" width="230%" height="180%"><feGaussianBlur stdDeviation="3.2"/></filter>
      <filter id="${id}-shadow" x="-35%" y="-30%" width="170%" height="180%"><feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#000" flood-opacity=".55"/></filter>
    </defs>`;
  }

  function uprightShaft(id) {
    const wraps = Array.from({ length: 20 }, (_, index) => {
      const y = 180 + index * 12;
      return `<path d="M84 ${y}Q90 ${y + 6} 96 ${y + 1}M84 ${y + 3}Q90 ${y + 9} 96 ${y + 4}" stroke="#E5B570" stroke-width="1.1"/><path d="M85 ${y + 6}L95 ${y + 10}" stroke="#40291C" stroke-width="1.1"/>`;
    }).join('');
    const bands = [207, 267, 327, 387].map(y => `<rect x="82.9" y="${y}" width="14.2" height="8" rx="1.5" fill="#653A21" stroke="#DFB370" stroke-width=".8"/><path d="M84 ${y + 2}H96M84 ${y + 6}H96" stroke="#E7B966" stroke-width=".7"/><path d="M88 ${y + 1}L92 ${y + 4}L88 ${y + 7}" fill="none" stroke="#5CB3B7" stroke-width="1.6"/>`).join('');
    return `<path d="M84 165H96V425H84Z" fill="url(#${id}-shaft)" stroke="#71461F" stroke-width=".6"/><path d="M87 169V424" stroke="#F8D38E" stroke-width=".7" opacity=".4"/>${wraps}${bands}<rect x="83" y="418" width="14" height="7" rx="1.2" fill="#A76D2E" stroke="#F0BF6D" stroke-width=".9"/>`;
  }

  function horizontalShaft(id) {
    const wraps = Array.from({ length: 20 }, (_, index) => {
      const x = 10 + index * 12;
      return `<path d="M${x} 84Q${x + 6} 90 ${x + 1} 96M${x + 3} 84Q${x + 9} 90 ${x + 4} 96" stroke="#E5B570" stroke-width="1.1"/><path d="M${x + 6} 85L${x + 10} 95" stroke="#40291C" stroke-width="1.1"/>`;
    }).join('');
    const bands = [33, 93, 153, 213].map(x => `<rect x="${x}" y="82.9" width="8" height="14.2" rx="1.5" fill="#653A21" stroke="#DFB370" stroke-width=".8"/><path d="M${x + 2} 84V96M${x + 6} 84V96" stroke="#E7B966" stroke-width=".7"/><path d="M${x + 1} 88L${x + 4} 92L${x + 7} 88" fill="none" stroke="#5CB3B7" stroke-width="1.6"/>`).join('');
    return `<path d="M0 84H260V96H0Z" fill="url(#${id}-horizontal-shaft)" stroke="#71461F" stroke-width=".6"/><path d="M1 87H260" stroke="#F8D38E" stroke-width=".7" opacity=".4"/>${wraps}${bands}`;
  }

  function head(id) {
    const petals = Array.from({ length: 12 }, (_, index) => `<g transform="rotate(${15 + index * 30})"><path d="M0 -43C-14 -47 -16 -63 0 -76C16 -63 14 -47 0 -43Z" fill="#263637" stroke="url(#${id}-ring)" stroke-width="2"/><path d="M0 -48C-10 -52 -10 -62 0 -71C10 -62 10 -52 0 -48Z" fill="url(#${id}-teal)" stroke="#B58C48" stroke-width="1"/><path d="M0 -49V-69M-8 -58L0 -54L8 -58" stroke="#E4B365" stroke-width=".8" opacity=".8"/><path d="M-10 -53Q-13 -61 -4 -67M10 -53Q13 -61 4 -67" stroke="#71BFC0" stroke-width=".7" fill="none"/></g>`).join('');
    const rays = Array.from({ length: 20 }, (_, index) => `<path transform="rotate(${index * 18})" d="M0 -17C-10 -24 1 -32 -6 -45C6 -38 2 -29 9 -23Z" fill="${index % 2 ? '#E8A53A' : '#FFE19A'}" stroke="#A85B20" stroke-width=".65"/>`).join('');
    const beads = Array.from({ length: 40 }, (_, index) => {
      const angle = index * Math.PI / 20;
      return `<circle cx="${(Math.cos(angle) * 54).toFixed(2)}" cy="${(Math.sin(angle) * 54).toFixed(2)}" r="1.05" fill="#FFF0AD"/>`;
    }).join('');

    return `<g class="astra-energy" aria-hidden="true">
      <ellipse cx="90" cy="135" rx="88" ry="94" fill="url(#${id}-aura)"><animate class="energy-animation" attributeName="opacity" values=".65;1;.72;.65" dur="3.4s" repeatCount="indefinite"/></ellipse>
      <path d="M90 18C83 48 69 65 72 86C57 108 65 131 80 146H102C120 120 116 104 108 86C110 62 96 43 90 18Z" fill="url(#${id}-fire)" filter="url(#${id}-glow)" opacity=".8"><animate class="energy-animation" attributeName="opacity" values=".6;1;.7;.6" dur="2.3s" repeatCount="indefinite"/></path>
      <path d="M65 153C47 137 60 118 49 103C52 120 32 127 40 143C27 135 33 116 25 108C34 129 15 142 30 160C28 150 22 147 21 139C15 163 35 182 59 177Z" fill="url(#${id}-fire)" opacity=".63">
        <animate class="energy-animation" attributeName="d" values="M65 153C47 137 60 118 49 103C52 120 32 127 40 143C27 135 33 116 25 108C34 129 15 142 30 160C28 150 22 147 21 139C15 163 35 182 59 177Z;M65 153C53 138 64 120 55 109C57 125 38 130 43 146C30 139 38 122 31 113C35 133 21 142 32 162C30 152 25 149 25 143C21 166 38 181 59 177Z;M65 153C44 137 53 117 42 105C47 122 27 129 36 145C24 139 26 122 19 114C30 133 11 147 27 164C25 154 19 153 19 145C14 168 34 184 59 177Z;M65 153C47 137 60 118 49 103C52 120 32 127 40 143C27 135 33 116 25 108C34 129 15 142 30 160C28 150 22 147 21 139C15 163 35 182 59 177Z" dur="2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.33;.67;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/>
      </path>
      <path transform="translate(180 0) scale(-1 1)" d="M65 153C47 137 60 118 49 103C52 120 32 127 40 143C27 135 33 116 25 108C34 129 15 142 30 160C28 150 22 147 21 139C15 163 35 182 59 177Z" fill="url(#${id}-fire)" opacity=".55"><animate class="energy-animation" attributeName="opacity" values=".4;.75;.5;.4" dur="2.6s" repeatCount="indefinite"/></path>
    </g>

    <g filter="url(#${id}-shadow)">
      <g transform="translate(90 158) scale(1 .64)">
        ${petals}
        <ellipse cy="8" rx="58" ry="58" fill="#3B2118" stroke="#8D511F" stroke-width="2"/>
        <circle r="59" fill="url(#${id}-ring)" stroke="#F7D281" stroke-width="1.2"/>
        <circle r="55" fill="none" stroke="#8C4E1B" stroke-width="1.3"/>
        ${beads}
        <circle r="50" fill="#5F2B18" stroke="#FFDA7C" stroke-width="1.4"/>
        <circle r="47" fill="url(#${id}-ember)" stroke="#A35B21" stroke-width="1.1"/>
        ${rays}
        <circle r="18" fill="#74351B" stroke="#F6CA6D" stroke-width="2.3"/>
        <circle r="13" fill="url(#${id}-ring)" stroke="#673B1C" stroke-width="1"/>
        <circle r="8" fill="#2D5553" stroke="#FFD98B" stroke-width="1"/>
        <path d="M-38 -40C-15 -58 19 -55 39 -38" stroke="#FFF1B0" stroke-width="1.5" opacity=".8" fill="none"/>
        <path d="M-41 39C-20 56 12 60 40 40" stroke="#8E4C20" stroke-width="2" opacity=".7" fill="none"/>
      </g>

      <!-- The bright blade rises out of a carved, blue-inlaid golden socket. -->
      <path d="M90 18C86 43 77 62 73 84L78 108L90 130L102 108L107 84C103 62 94 43 90 18Z" fill="url(#${id}-blade)" stroke="#F5B240" stroke-width="1"/>
      <path d="M90 26L93 91L90 116L87 91Z" fill="#FFF9BD"/>
      <path d="M90 34V113" stroke="#FFFFFF" stroke-width="1" opacity=".84"/>
      <path d="M78 79L82 101L87 111M102 79L98 101L93 111" stroke="#FFF0A0" stroke-width="1" opacity=".8"/>
      <path d="M90 91L97 111L90 129L83 111Z" fill="#DE7F25" stroke="#FFD485" stroke-width=".9"/>
      <path d="M66 106C72 111 78 115 90 119C102 115 108 111 114 106L108 128L101 139L90 146L79 139L72 128Z" fill="url(#${id}-gold)" stroke="#713719" stroke-width="1.2"/>
      <path d="M65 105C64 96 66 92 62 86C73 93 78 102 82 113L77 125L70 119Z" fill="url(#${id}-gold)" stroke="#A9662B" stroke-width="1"/>
      <path d="M115 105C116 96 114 92 118 86C107 93 102 102 98 113L103 125L110 119Z" fill="url(#${id}-gold)" stroke="#A9662B" stroke-width="1"/>
      <path d="M71 106C73 105 76 112 78 117L75 121L72 118Z" fill="#59BBC5" stroke="#163D44" stroke-width=".8"/>
      <path d="M109 106C107 105 104 112 102 117L105 121L108 118Z" fill="#59BBC5" stroke="#163D44" stroke-width=".8"/>
      <path d="M80 122C79 131 84 133 88 128C92 123 83 122 84 127M100 122C101 131 96 133 92 128C88 123 97 122 96 127" stroke="#693818" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M90 122L94 129L90 137L86 129Z" fill="#215C65" stroke="#FBE19A" stroke-width="1"/>
      <path d="M90 125L91 130L89 132Z" fill="#A1EEF1"/>
      <path d="M76 137Q90 146 104 137L102 145Q90 154 78 145Z" fill="url(#${id}-gold)" stroke="#6F3B1A" stroke-width="1"/>
      <path d="M79 142Q90 149 101 142M80 146Q90 153 100 146" stroke="#F9D58B" stroke-width="1.2"/>
      <path d="M81 151Q90 157 99 151L98 169H82Z" fill="url(#${id}-gold)" stroke="#78421C" stroke-width="1"/>
      <path d="M82 157H98M82 161H98M82 165H98" stroke="#F4C778" stroke-width="1"/>
      <path d="M84 169H96V179H84Z" fill="#8B5426" stroke="#E3B66A" stroke-width=".8"/>
      <path d="M86 171L90 177L94 171" stroke="#71B8B8" stroke-width="1.2" fill="none"/>
    </g>

    <g class="astra-sparks" fill="#FFDA70">
      <circle cx="60" cy="88" r="1.2"><animate class="energy-animation" attributeName="opacity" values="0;.8;0" dur="2.7s" repeatCount="indefinite"/><animate class="energy-animation" attributeName="cy" values="98;69" dur="2.7s" repeatCount="indefinite"/></circle>
      <circle cx="122" cy="105" r=".9"><animate class="energy-animation" attributeName="opacity" values=".1;1;.1" dur="3.1s" repeatCount="indefinite"/><animate class="energy-animation" attributeName="cy" values="112;85" dur="3.1s" repeatCount="indefinite"/></circle>
      <circle cx="38" cy="134" r=".8"><animate class="energy-animation" attributeName="opacity" values="0;.9;0" dur="2.2s" repeatCount="indefinite"/></circle>
      <circle cx="143" cy="141" r="1"><animate class="energy-animation" attributeName="opacity" values=".8;0;.8" dur="3.5s" repeatCount="indefinite"/></circle>
    </g>`;
  }

  window.createAstraArt = function createAstraArt(value) {
    const id = instanceId(value, 'upright');
    return `<svg class="trishul-illustration astra-illustration" viewBox="0 0 180 440" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${definitions(id)}<g>${uprightShaft(id)}</g>${head(id)}</svg>`;
  };

  window.createJoinedAstraArt = function createJoinedAstraArt(value) {
    const id = instanceId(value, 'horizontal');
    return `<svg class="joined-trishul-illustration astra-illustration" viewBox="0 0 440 260" width="440" height="260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${definitions(id)}<g class="joined-shaft">${horizontalShaft(id)}</g><g class="joined-head"><g transform="translate(425 0) rotate(90)">${head(id)}</g></g></svg>`;
  };
})();
