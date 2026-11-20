(function () {
  'use strict';

  // Each illustration gets its own paint definitions, so both trishuls can
  // animate independently when they appear together around the button.
  window.createTrishulArt = function createTrishulArt(instanceId) {
    const id = String(instanceId || 'trishul').replace(/[^a-zA-Z0-9_-]/g, '');
    return `<svg class="trishul-illustration" viewBox="0 0 180 440" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="${id}-gold" x1="22" y1="74" x2="150" y2="180" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9C4B19"/><stop offset=".23" stop-color="#F7CC70"/><stop offset=".47" stop-color="#CA8C35"/><stop offset=".7" stop-color="#EEC46C"/><stop offset="1" stop-color="#8F3F17"/>
        </linearGradient>
        <linearGradient id="${id}-spear" x1="77" y1="18" x2="106" y2="151" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFE2A0"/><stop offset=".42" stop-color="#DBA346"/><stop offset=".8" stop-color="#B37228"/><stop offset="1" stop-color="#E6AD51"/>
        </linearGradient>
        <linearGradient id="${id}-shaft" x1="83" y1="270" x2="97" y2="270" gradientUnits="userSpaceOnUse">
          <stop stop-color="#3E2918"/><stop offset=".28" stop-color="#A97935"/><stop offset=".48" stop-color="#D4A557"/><stop offset=".68" stop-color="#8D5B28"/><stop offset="1" stop-color="#432819"/>
        </linearGradient>
        <linearGradient id="${id}-wood" x1="56" y1="185" x2="130" y2="241" gradientUnits="userSpaceOnUse">
          <stop stop-color="#B3632F"/><stop offset=".35" stop-color="#77351F"/><stop offset=".62" stop-color="#A94B2A"/><stop offset="1" stop-color="#4C241B"/>
        </linearGradient>
        <linearGradient id="${id}-hide" x1="42" y1="210" x2="68" y2="210" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C29148"/><stop offset=".45" stop-color="#F6D993"/><stop offset="1" stop-color="#B27A36"/>
        </linearGradient>
        <linearGradient id="${id}-crimson" x1="64" y1="240" x2="112" y2="350" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8E1715"/><stop offset=".3" stop-color="#D93B23"/><stop offset=".57" stop-color="#BA2019"/><stop offset=".83" stop-color="#EE4E29"/><stop offset="1" stop-color="#7E1918"/>
        </linearGradient>
        <linearGradient id="${id}-silk" x1="101" y1="237" x2="89" y2="359" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFBC4E"/><stop offset=".28" stop-color="#E87726"/><stop offset=".59" stop-color="#F4B347"/><stop offset=".81" stop-color="#CA4D1D"/><stop offset="1" stop-color="#F9A63B"/>
        </linearGradient>
        <linearGradient id="${id}-fold" x1="83" y1="244" x2="76" y2="361" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F55C30"/><stop offset=".38" stop-color="#F04A27"/><stop offset=".7" stop-color="#A71C19"/><stop offset="1" stop-color="#C62920"/>
        </linearGradient>
        <radialGradient id="${id}-ruby" cx=".35" cy=".3" r=".8">
          <stop stop-color="#F5A76F"/><stop offset=".25" stop-color="#B02A28"/><stop offset=".67" stop-color="#6B161E"/><stop offset="1" stop-color="#34141A"/>
        </radialGradient>
        <filter id="${id}-shadow" x="-50%" y="-30%" width="200%" height="170%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#000" flood-opacity=".45"/>
        </filter>
      </defs>
      <g filter="url(#${id}-shadow)">
        <path d="M84 165H96V425H84Z" fill="url(#${id}-shaft)"/>
        <path d="M87 178V422" stroke="#EFC47B" stroke-opacity=".21"/>

        <!-- The cloth is tied at the drum; its loose ends catch the breeze. -->
        <path class="cloth-ribbon cloth-ribbon-back" fill="#8A1C18" d="M79 230C72 252 53 266 65 291C80 317 48 330 64 353C76 371 63 382 70 392C66 376 86 367 76 348C64 326 96 314 82 287C71 267 94 251 95 232Z">
          <animate attributeName="d" dur="2.8s" repeatCount="indefinite" values="M79 230C72 252 53 266 65 291C80 317 48 330 64 353C76 371 63 382 70 392C66 376 86 367 76 348C64 326 96 314 82 287C71 267 94 251 95 232Z;M79 230C87 251 68 270 53 291C37 316 77 332 63 353C49 373 67 382 60 392C73 383 64 370 80 353C98 332 64 315 72 292C81 272 105 253 95 232Z;M79 230C68 253 76 267 87 290C101 315 63 334 78 355C89 374 75 382 84 392C82 377 100 368 91 351C80 331 117 313 104 287C93 267 91 250 95 232Z;M79 230C72 252 53 266 65 291C80 317 48 330 64 353C76 371 63 382 70 392C66 376 86 367 76 348C64 326 96 314 82 287C71 267 94 251 95 232Z" calcMode="spline" keyTimes="0;.33;.67;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/>
        </path>
        <path class="cloth-ribbon cloth-ribbon-main" fill="url(#${id}-crimson)" d="M80 227C79 251 63 267 69 286C76 306 56 316 61 334C64 349 77 348 71 368C92 352 78 341 85 328C100 309 103 298 94 282C85 266 106 248 103 231Z">
          <animate attributeName="d" dur="2.6s" repeatCount="indefinite" values="M80 227C79 251 63 267 69 286C76 306 56 316 61 334C64 349 77 348 71 368C92 352 78 341 85 328C100 309 103 298 94 282C85 266 106 248 103 231Z;M80 227C88 250 81 266 64 286C48 306 67 317 75 333C83 349 67 358 76 372C81 356 99 347 92 331C84 313 72 308 86 290C104 268 112 249 103 231Z;M80 227C72 252 60 264 77 285C96 305 80 314 73 333C65 349 85 355 80 371C98 359 86 348 97 332C110 312 119 301 104 281C88 260 108 249 103 231Z;M80 227C79 251 63 267 69 286C76 306 56 316 61 334C64 349 77 348 71 368C92 352 78 341 85 328C100 309 103 298 94 282C85 266 106 248 103 231Z" calcMode="spline" keyTimes="0;.33;.67;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/>
        </path>
        <path class="cloth-ribbon cloth-ribbon-gold" fill="url(#${id}-silk)" d="M98 230C115 253 91 273 99 295C108 317 94 333 105 350C111 359 107 365 112 374C117 360 113 350 117 339C124 318 111 309 113 293C115 274 132 253 112 232Z">
          <animate attributeName="d" dur="2.35s" repeatCount="indefinite" values="M98 230C115 253 91 273 99 295C108 317 94 333 105 350C111 359 107 365 112 374C117 360 113 350 117 339C124 318 111 309 113 293C115 274 132 253 112 232Z;M98 230C105 254 113 270 105 292C95 316 114 328 108 346C103 359 115 365 110 375C123 365 115 354 125 340C136 322 112 310 120 291C130 269 123 251 112 232Z;M98 230C118 254 100 271 116 292C134 313 117 328 124 347C127 359 119 364 125 374C130 361 139 349 133 336C123 316 148 306 131 287C116 268 131 251 112 232Z;M98 230C115 253 91 273 99 295C108 317 94 333 105 350C111 359 107 365 112 374C117 360 113 350 117 339C124 318 111 309 113 293C115 274 132 253 112 232Z" calcMode="spline" keyTimes="0;.33;.67;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/>
        </path>
        <path class="cloth-ribbon cloth-ribbon-fold" fill="url(#${id}-fold)" d="M90 233C89 253 73 268 80 286C87 302 70 315 72 328C74 336 77 339 75 345C88 337 84 328 91 318C103 300 100 290 94 280C87 268 108 247 103 233Z">
          <animate attributeName="d" dur="2.6s" repeatCount="indefinite" values="M90 233C89 253 73 268 80 286C87 302 70 315 72 328C74 336 77 339 75 345C88 337 84 328 91 318C103 300 100 290 94 280C87 268 108 247 103 233Z;M90 233C100 254 88 267 74 285C58 304 79 317 84 329C89 339 80 345 83 349C95 339 101 331 91 317C80 302 82 295 92 283C105 267 111 248 103 233Z;M90 233C80 254 73 268 88 285C102 301 92 316 83 329C78 336 88 345 86 349C98 339 93 334 101 321C115 301 111 291 99 278C87 266 109 247 103 233Z;M90 233C89 253 73 268 80 286C87 302 70 315 72 328C74 336 77 339 75 345C88 337 84 328 91 318C103 300 100 290 94 280C87 268 108 247 103 233Z" calcMode="spline" keyTimes="0;.33;.67;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/>
        </path>

        <!-- Three golden prongs, with the center spear and inset ruby. -->
        <path d="M52 75C54 94 36 105 29 121C18 148 37 165 61 155L81 146L83 170C75 173 69 174 62 174C33 182 12 161 18 135C22 111 47 101 49 77Z" fill="url(#${id}-gold)" stroke="#94551F" stroke-width="1.2"/>
        <path d="M128 75C126 94 144 105 151 121C162 148 143 165 119 155L99 146L97 170C105 173 111 174 118 174C147 182 168 161 162 135C158 111 133 101 131 77Z" fill="url(#${id}-gold)" stroke="#94551F" stroke-width="1.2"/>
        <path d="M49 87C49 108 20 122 25 143C29 159 40 166 56 165" stroke="#F9D98E" stroke-width="1.7" stroke-linecap="round" opacity=".75"/>
        <path d="M132 87C133 108 159 121 156 141C155 151 149 158 141 162" stroke="#F5CB72" stroke-width="1.25" stroke-linecap="round" opacity=".55"/>
        <circle cx="50" cy="75" r="4.2" fill="url(#${id}-gold)" stroke="#8E511E" stroke-width="1"/>
        <circle cx="130" cy="75" r="4.2" fill="url(#${id}-gold)" stroke="#8E511E" stroke-width="1"/>
        <path d="M90 18C89 52 85 70 76 88L85 110L84 137H96L95 110L104 88C95 70 91 52 90 18Z" fill="url(#${id}-spear)" stroke="#93541C" stroke-width="1"/>
        <path d="M90 30V77L81 90L87 109" stroke="#FFE8AB" stroke-width="1.25" opacity=".65"/>
        <path d="M90 67L96 86L90 102L84 86Z" fill="url(#${id}-ruby)" stroke="#F0BD5F" stroke-width="1.3"/>
        <path d="M90 73L87 86L90 96L93 86Z" stroke="#E07B56" stroke-width=".7"/>
        <path d="M90 77V94" stroke="#F0B68B" stroke-width=".65" opacity=".8"/>

        <rect x="80" y="112" width="20" height="4" rx="1.6" fill="#C18D42" stroke="#8C5421" stroke-width=".7"/>
        <rect x="79" y="117" width="22" height="4" rx="1.6" fill="#E2B86C" stroke="#8C5421" stroke-width=".7"/>
        <rect x="80" y="122" width="20" height="4" rx="1.6" fill="#C18D42" stroke="#8C5421" stroke-width=".7"/>
        <path d="M85 131C81 139 81 145 73 149C66 153 67 163 77 168L83 174L83 181H97V174L103 168C113 163 114 153 107 149C99 145 99 139 95 131Z" fill="url(#${id}-gold)" stroke="#92531F" stroke-width="1"/>
        <path d="M90 136V174" stroke="#75441E" stroke-width="1" opacity=".65"/>
        <path d="M82 143C78 146 78 153 84 155C88 157 92 152 89 148" stroke="#875123" stroke-width="1.4" stroke-linecap="round"/>
        <path d="M98 143C102 146 102 153 96 155C92 157 88 152 91 148" stroke="#875123" stroke-width="1.4" stroke-linecap="round"/>
        <circle cx="90" cy="139" r="2.5" fill="#D75C35" stroke="#F6C978" stroke-width=".9"/>
        <circle cx="77" cy="159" r="2" fill="#E8BC60"/>
        <circle cx="103" cy="159" r="2" fill="#E8BC60"/>
        <rect x="81" y="180" width="18" height="6" rx="2" fill="url(#${id}-gold)" stroke="#965D27" stroke-width=".8"/>

        <!-- Damaru: wooden hourglass, skin head, and taut woven lacing. -->
        <path d="M59 184C76 184 82 201 94 202C106 201 114 184 131 184V241C114 241 107 224 94 223C81 224 74 241 59 241Z" fill="url(#${id}-wood)" stroke="#5D2C1B" stroke-width="1.4"/>
        <ellipse cx="130" cy="212.5" rx="16" ry="28.5" fill="#702D20" stroke="#BC7642" stroke-width="1.8"/>
        <g stroke="#D58C50" stroke-width=".8" opacity=".7">
          <path d="M61 188C79 191 81 206 95 206C109 206 114 190 133 188"/><path d="M61 194C77 196 83 208 96 209C109 209 119 196 141 196"/><path d="M62 200C78 202 84 211 96 212C110 212 122 202 144 204"/><path d="M62 206C77 208 84 212 96 214C112 216 122 211 145 212"/><path d="M62 212C79 213 85 214 96 216C111 219 122 218 145 220"/><path d="M62 219C78 218 86 216 96 218C110 222 120 227 142 229"/><path d="M61 225C78 222 83 219 96 220C109 224 118 233 138 236"/><path d="M61 233C78 228 82 222 96 222C107 225 115 238 130 240"/>
        </g>
        <ellipse cx="59" cy="212.5" rx="13" ry="29" fill="url(#${id}-hide)" stroke="#704523" stroke-width="1.8"/>
        <ellipse cx="58" cy="212.5" rx="8.6" ry="23" fill="#EBC77E" stroke="#F8DFA2" stroke-width=".8"/>
        <ellipse cx="57" cy="212.5" rx="3.8" ry="13" fill="#674327"/>
        <path d="M57 201C55 206 55 215 57 221" stroke="#38251C" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M71 190C85 201 84 222 70 236M125 188C111 199 110 225 125 238" stroke="#D19A57" stroke-width="1.2" opacity=".65"/>
        <path d="M91 203L94 222M94 203L97 222" stroke="#D6A361" stroke-width="1.3"/>
        <path d="M88 233C92 230 100 229 106 233L103 240L90 241Z" fill="#D83B25" stroke="#8D251B" stroke-width="1"/>
        <path d="M92 236L102 235" stroke="#F07B43" stroke-width="1"/>
        <path d="M87 221C77 231 70 238 76 248C80 255 87 249 86 243C85 238 80 238 79 241" stroke="#A87C44" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="85" cy="248" r="3" fill="#C78A43" stroke="#734522" stroke-width=".8"/>
      </g>
    </svg>`;
  };
})();
