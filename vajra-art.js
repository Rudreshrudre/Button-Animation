(function () {
  'use strict';

  function paintId(id, orientation) {
    return 'vajra-' + orientation + '-' + String(id || 'art').replace(/[^a-zA-Z0-9_-]/g, '');
  }

  function definitions(id) {
    return `<defs>
      <linearGradient id="${id}-steel" x1="30" y1="72" x2="144" y2="145" gradientUnits="userSpaceOnUse"><stop stop-color="#FBFFFF"/><stop offset=".18" stop-color="#B9C8D0"/><stop offset=".39" stop-color="#667D8D"/><stop offset=".52" stop-color="#E8F4F7"/><stop offset=".67" stop-color="#8CA2AE"/><stop offset=".84" stop-color="#253F54"/><stop offset="1" stop-color="#AEC4CC"/></linearGradient>
      <linearGradient id="${id}-blade-left" x1="65" y1="80" x2="92" y2="84" gradientUnits="userSpaceOnUse"><stop stop-color="#6D8798"/><stop offset=".28" stop-color="#E6EEF0"/><stop offset=".8" stop-color="#B7C8D0"/><stop offset="1" stop-color="#F2FAFD"/></linearGradient>
      <linearGradient id="${id}-blade-right" x1="90" y1="83" x2="113" y2="83" gradientUnits="userSpaceOnUse"><stop stop-color="#2B506A"/><stop offset=".48" stop-color="#153148"/><stop offset=".8" stop-color="#6C899A"/><stop offset="1" stop-color="#C2D3D9"/></linearGradient>
      <linearGradient id="${id}-gold" x1="27" y1="86" x2="148" y2="149" gradientUnits="userSpaceOnUse"><stop stop-color="#6C391F"/><stop offset=".19" stop-color="#F4D39A"/><stop offset=".38" stop-color="#B4783F"/><stop offset=".54" stop-color="#E3B66E"/><stop offset=".75" stop-color="#6F4327"/><stop offset="1" stop-color="#D4A15E"/></linearGradient>
      <linearGradient id="${id}-bronze" x1="77" y1="265" x2="104" y2="265" gradientUnits="userSpaceOnUse"><stop stop-color="#271E18"/><stop offset=".17" stop-color="#90613B"/><stop offset=".38" stop-color="#D9AD70"/><stop offset=".53" stop-color="#7D4C29"/><stop offset=".8" stop-color="#412B1B"/><stop offset="1" stop-color="#1D1D1A"/></linearGradient>
      <linearGradient id="${id}-grip" x1="84" y1="270" x2="96" y2="270" gradientUnits="userSpaceOnUse"><stop stop-color="#3B2B21"/><stop offset=".26" stop-color="#D6A369"/><stop offset=".5" stop-color="#7C4F30"/><stop offset=".77" stop-color="#B4834D"/><stop offset="1" stop-color="#2C211C"/></linearGradient>
      <linearGradient id="${id}-horizontal-grip" x1="120" y1="84" x2="120" y2="96" gradientUnits="userSpaceOnUse"><stop stop-color="#E6C38C"/><stop offset=".22" stop-color="#A77D4C"/><stop offset=".46" stop-color="#473426"/><stop offset=".7" stop-color="#9D6B3D"/><stop offset="1" stop-color="#251F1C"/></linearGradient>
      <radialGradient id="${id}-sapphire" cx=".35" cy=".22" r=".85"><stop stop-color="#BDFAFF"/><stop offset=".18" stop-color="#53B7D6"/><stop offset=".45" stop-color="#1F7297"/><stop offset=".8" stop-color="#123448"/><stop offset="1" stop-color="#071B30"/></radialGradient>
      <radialGradient id="${id}-energy"><stop stop-color="#7BDFFF" stop-opacity=".7"/><stop offset=".45" stop-color="#37A8E4" stop-opacity=".19"/><stop offset="1" stop-color="#32A8E6" stop-opacity="0"/></radialGradient>
      <filter id="${id}-shadow" x="-50%" y="-30%" width="200%" height="180%"><feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#020812" flood-opacity=".65"/></filter>
      <filter id="${id}-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="1.9"/></filter>
    </defs>`;
  }

  function head(id) {
    return `<g class="vajra-energy" pointer-events="none">
      <ellipse cx="90" cy="100" rx="66" ry="77" fill="url(#${id}-energy)" opacity=".24"><animate class="energy-animation" attributeName="opacity" values=".12;.38;.16;.29;.12" dur="3.7s" repeatCount="indefinite"/></ellipse>
      <g stroke="#69D9FF" stroke-width=".9" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M47 77L35 89L41 95L25 110L31 117" opacity=".18"><animate class="energy-animation" attributeName="opacity" values="0;0;.55;.07;.38;0;0" dur="2.9s" repeatCount="indefinite"/></path>
        <path d="M132 85L145 96L139 104L154 119L148 130" opacity=".1"><animate class="energy-animation" attributeName="opacity" values="0;.13;0;.6;.12;0" dur="3.3s" repeatCount="indefinite"/></path>
        <path d="M86 36L80 53L85 62" opacity=".16"><animate class="energy-animation" attributeName="opacity" values=".05;.5;.08;.2;.05" dur="2.7s" repeatCount="indefinite"/></path>
      </g>
    </g>
    <g filter="url(#${id}-shadow)">
      <!-- The broad faceted center blade keeps the geometry of the reference. -->
      <path d="M90 18L110 77L111 113C106 124 105 137 113 149C106 146 98 145 90 145C82 145 74 146 67 149C75 137 74 124 69 113L70 77Z" fill="url(#${id}-blade-left)" stroke="#7D939F" stroke-width="1"/>
      <path d="M90 18L110 77L111 113C106 124 105 137 113 149C106 146 98 145 90 145Z" fill="url(#${id}-blade-right)"/>
      <path d="M90 20V144" stroke="#EFFBFF" stroke-width=".9" opacity=".8"/>
      <path d="M90 23L73 78L73 109" stroke="#FFFFFF" stroke-width="1.25" opacity=".78"/>
      <path d="M90 101L71 88M90 111L71 98" stroke="#345166" stroke-width="1.8"/>
      <path d="M90 101L109 88M90 111L109 98" stroke="#B8D1DB" stroke-width="1.1" opacity=".7"/>
      <path d="M73 90L89 101M73 100L89 111" stroke="#F6FBFA" stroke-width=".7"/>

      <!-- Sculpted curling flame prongs: deep steel with raised bronze edges. -->
      <path d="M60 62C62 82 42 94 37 110C31 128 44 134 59 128C64 126 67 122 65 117C61 109 52 113 47 121C53 102 73 108 76 120C81 138 59 149 55 159C52 168 62 173 77 173C50 179 29 161 28 143C27 132 32 124 34 118C29 102 50 88 56 76Z" fill="url(#${id}-steel)" stroke="#334B5B" stroke-width="1.15"/>
      <path d="M120 62C118 82 138 94 143 110C149 128 136 134 121 128C116 126 113 122 115 117C119 109 128 113 133 121C127 102 107 108 104 120C99 138 121 149 125 159C128 168 118 173 103 173C130 179 151 161 152 143C153 132 148 124 146 118C151 102 130 88 124 76Z" fill="url(#${id}-steel)" stroke="#334B5B" stroke-width="1.15"/>
      <path d="M60 64C60 86 38 97 36 114C34 128 45 133 59 128C64 126 66 121 64 117C60 112 55 114 51 118" stroke="url(#${id}-gold)" stroke-width="3.3" stroke-linecap="round"/>
      <path d="M120 64C120 86 142 97 144 114C146 128 135 133 121 128C116 126 114 121 116 117C120 112 125 114 129 118" stroke="url(#${id}-gold)" stroke-width="3.3" stroke-linecap="round"/>
      <path d="M58 70C55 89 36 100 33 115C29 131 42 139 57 133" stroke="#F2F6ED" stroke-width="1.15" stroke-linecap="round" opacity=".88"/>
      <path d="M123 73C127 91 144 103 147 117C150 130 141 137 127 135" stroke="#D7EBF3" stroke-width="1.1" stroke-linecap="round" opacity=".6"/>
      <path d="M32 132C25 153 46 173 69 172C52 166 45 157 45 147C45 140 41 135 37 134Z" fill="url(#${id}-steel)" stroke="#9AB1BC" stroke-width=".8"/>
      <path d="M148 132C155 153 134 173 111 172C128 166 135 157 135 147C135 140 139 135 143 134Z" fill="url(#${id}-steel)" stroke="#9AB1BC" stroke-width=".8"/>
      <path d="M31 137C31 154 47 168 65 171M149 137C149 154 133 168 115 171" stroke="url(#${id}-gold)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M36 144C39 154 47 160 55 163M144 144C141 154 133 160 125 163" stroke="#F0F7F8" stroke-width=".8" opacity=".75"/>
      <path d="M69 126C71 139 54 148 52 158M111 126C109 139 126 148 128 158" stroke="#182B3B" stroke-width="1.2" opacity=".65"/>
      <path d="M72 133C66 140 62 146 61 151M108 133C114 140 118 146 119 151" stroke="#C4D5D9" stroke-width=".8" opacity=".6"/>

      <!-- The dark socket, raised gold collars and inset blue cabochon. -->
      <path d="M68 149Q90 138 112 149L102 158H78Z" fill="#172D3A" stroke="#8198A1" stroke-width="1"/>
      <path d="M73 149Q90 143 107 149" stroke="#F0E3BD" stroke-width="1.2"/>
      <path d="M80 152H100L104 165H76Z" fill="url(#${id}-bronze)" stroke="#392A1E" stroke-width="1"/>
      <ellipse cx="90" cy="156" rx="13" ry="4" fill="url(#${id}-gold)" stroke="#DCBF86" stroke-width=".65"/>
      <path d="M80 159Q90 163 100 159V164H80Z" fill="#273C44"/>
      <ellipse cx="90" cy="164" rx="14" ry="3" fill="url(#${id}-gold)" stroke="#402E22" stroke-width=".8"/>
      <path d="M90 154L95 159L90 164L85 159Z" fill="url(#${id}-sapphire)" stroke="#D5BB7A" stroke-width=".7"/>
      <path d="M90 155L88 159L90 162L93 159Z" stroke="#9BE7EE" stroke-width=".5" opacity=".7"/>
      <circle cx="89" cy="157.8" r="1.2" fill="#C5F9FF" opacity=".85"><animate class="energy-animation" attributeName="opacity" values=".3;1;.4;.8;.3" dur="3.2s" repeatCount="indefinite"/></circle>
    </g>`;
  }

  function uprightHandle(id) {
    const binding = Array.from({ length: 30 }, (_, index) => {
      const y = 180 + index * 7.4;
      return `<path d="M84 ${y + 3}Q90 ${y - 1} 96 ${y - 3}" stroke="#2D231D" stroke-width="3.1"/><path d="M84 ${y + 2}Q90 ${y - 2} 96 ${y - 4}" stroke="#BE8D53" stroke-width="1.65"/><path d="M85 ${y + 1}L92 ${y - 2}" stroke="#F1CB90" stroke-width=".55" opacity=".6"/>`;
    }).join('');
    return `<g class="vajra-shaft" filter="url(#${id}-shadow)">
      <path d="M84 165H96V420L90 425L84 420Z" fill="url(#${id}-grip)" stroke="#4C3724" stroke-width=".7"/>
      <path d="M86 169V416" stroke="#E1B97E" stroke-width=".7" opacity=".5"/>
      ${binding}
      <path d="M78 171Q90 165 102 171V179Q90 186 78 179Z" fill="url(#${id}-bronze)" stroke="#473322" stroke-width="1"/>
      <ellipse cx="90" cy="171" rx="12" ry="3" fill="url(#${id}-gold)"/>
      <path d="M78 175Q90 181 102 175M79 179Q90 185 101 179" stroke="#D8B17C" stroke-width="1"/>
      <path d="M79 236L74 244L77 260L85 266H95L103 260L106 244L101 236L90 232Z" fill="url(#${id}-bronze)" stroke="#D3AB6F" stroke-width="1"/>
      <path d="M90 237L101 246L97 257L90 262L82 256L79 245Z" fill="url(#${id}-sapphire)" stroke="#D4C08F" stroke-width="1.2"/>
      <path d="M90 240L97 247L94 255L90 259L84 254L83 246Z" fill="none" stroke="#80C4D5" stroke-width=".65"/>
      <path d="M76 246Q81 241 83 236M77 257Q82 257 85 265M104 246Q99 241 97 236M103 257Q98 257 95 265" stroke="#E1B47B" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="90" cy="233" r="2.5" fill="#E5BE7A"/><circle cx="90" cy="266" r="2.5" fill="#D5A364"/>
      <circle cx="87" cy="244" r="1.6" fill="#CBF5FC" opacity=".75"><animate class="energy-animation" attributeName="opacity" values=".4;1;.3;.7;.4" dur="3.4s" repeatCount="indefinite"/></circle>
      <path d="M76 359L80 367L75 380L79 391L90 398L101 391L105 380L100 367L104 359L90 363Z" fill="url(#${id}-steel)" stroke="#8D9FA7" stroke-width="1"/>
      <path d="M76 360L90 366L104 360M78 388L90 396L102 388" stroke="url(#${id}-gold)" stroke-width="2"/>
      <path d="M90 369L100 378L96 388L90 393L83 387L80 378Z" fill="url(#${id}-sapphire)" stroke="#C4A66B" stroke-width="1.2"/>
      <path d="M90 373L96 379L93 386L90 389L85 385L84 379Z" stroke="#87D4E4" stroke-width=".65" opacity=".65"/>
      <path d="M82 396L78 410L85 416L90 425L95 416L102 410L98 396L90 402Z" fill="url(#${id}-steel)" stroke="#827F69" stroke-width=".8"/>
      <path d="M90 402V425" stroke="#E5F4F7" stroke-width=".9" opacity=".7"/>
      <path d="M84 405L90 410L96 405M85 411L90 415L95 411" stroke="#BE965E" stroke-width="1"/>
    </g>`;
  }

  function horizontalHandle(id) {
    const bindings = Array.from({ length: 38 }, (_, index) => {
      const x = 7 + index * 6.45;
      return `<path d="M${x} 84L${x + 4.7} 96" stroke="#261F1B" stroke-width="2.1"/><path d="M${x + 1.3} 84L${x + 6} 96" stroke="#C2935B" stroke-width="1.25"/><path d="M${x + 1.6} 84.7L${x + 2.8} 87.8" stroke="#F2CE93" stroke-width=".65" opacity=".8"/>`;
    }).join('');
    return `<g class="joined-shaft">
      <path d="M0 90L4 84H260V96H4Z" fill="url(#${id}-horizontal-grip)"/>
      ${bindings}
      <path d="M3 85H259M4 95H260" stroke="#DDC28D" stroke-width=".6" opacity=".5"/>
      <path d="M12 84V96M16 84V96M69 84V96M73 84V96M188 84V96M192 84V96M252 84V96M257 84V96" stroke="#3C3024" stroke-width="2"/>
      <path d="M13 84V96M70 84V96M189 84V96M253 84V96" stroke="#E3C18A" stroke-width=".9"/>
      <path d="M35 90L41 85L47 90L41 95Z" fill="url(#${id}-sapphire)" stroke="#D9BA7A" stroke-width=".7"/>
      <path d="M211 90L216 85L222 90L216 95Z" fill="url(#${id}-sapphire)" stroke="#D9BA7A" stroke-width=".7"/>
      <circle cx="215" cy="88.2" r="1" fill="#C5F9FF" opacity=".8"><animate class="energy-animation" attributeName="opacity" values=".25;.9;.3;.7;.25" dur="3.4s" repeatCount="indefinite"/></circle>
    </g>`;
  }

  window.createVajraArt = function createVajraArt(instanceId) {
    const id = paintId(instanceId, 'upright');
    return `<svg class="trishul-illustration" viewBox="0 0 180 440" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${definitions(id)}${uprightHandle(id)}${head(id)}</svg>`;
  };

  window.createJoinedVajraArt = function createJoinedVajraArt(instanceId) {
    const id = paintId(instanceId, 'joined');
    return `<svg class="joined-trishul-illustration" viewBox="0 0 440 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${definitions(id)}${horizontalHandle(id)}<g class="joined-head"><g transform="translate(425 0) rotate(90)">${head(id)}</g></g></svg>`;
  };
})();
