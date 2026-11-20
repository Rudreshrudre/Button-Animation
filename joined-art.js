(function () {
  'use strict';

  // The two halves share their handle endpoint at (0, 90). Keeping the shaft
  // and crown separate lets the reveal grow outward without opening a gap.
  window.createJoinedTrishulArt = function createJoinedTrishulArt(instanceId) {
    const id = String(instanceId || 'joined-trishul').replace(/[^a-zA-Z0-9_-]/g, '') || 'joined-trishul';
    const original = window.createTrishulArt(`${id}-form`);
    const definitions = original.match(/<defs>[\s\S]*?<\/defs>/)[0];
    const crown = original
      .replace(/^<svg\b[^>]*>/, '')
      .replace(/<\/svg>\s*$/, '')
      .replace(/<defs>[\s\S]*?<\/defs>/, '')
      .replace(/<path\b[^>]*class="[^"]*\bcloth-ribbon\b[^"]*"[^>]*>[\s\S]*?<\/path>/g, '')
      .replace(/<path d="M84 165H96V425H84Z"[^>]*\/>/, '')
      .replace(/<path d="M87 178V422"[^>]*\/>/, '');

    return `<svg class="joined-trishul-illustration" viewBox="0 0 440 260" width="440" height="260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      ${definitions}
      <defs>
        <linearGradient id="${id}-horizontal-shaft" x1="0" y1="84" x2="0" y2="96" gradientUnits="userSpaceOnUse">
          <stop stop-color="#432819"/><stop offset=".28" stop-color="#8D5B28"/><stop offset=".48" stop-color="#D4A557"/><stop offset=".68" stop-color="#A97935"/><stop offset="1" stop-color="#3E2918"/>
        </linearGradient>
        <linearGradient id="${id}-hanging-crimson" x1="175" y1="115" x2="210" y2="238" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8E1715"/><stop offset=".28" stop-color="#E14525"/><stop offset=".52" stop-color="#AE1D19"/><stop offset=".76" stop-color="#EC4D2B"/><stop offset="1" stop-color="#7E1918"/>
        </linearGradient>
        <linearGradient id="${id}-hanging-saffron" x1="202" y1="119" x2="225" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F8BA50"/><stop offset=".29" stop-color="#D76622"/><stop offset=".56" stop-color="#FFBF53"/><stop offset=".79" stop-color="#BC491C"/><stop offset="1" stop-color="#F6A13A"/>
        </linearGradient>
        <linearGradient id="${id}-hanging-fold" x1="191" y1="130" x2="184" y2="227" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F16A34"/><stop offset=".45" stop-color="#DF3A22"/><stop offset=".75" stop-color="#9E1B19"/><stop offset="1" stop-color="#D43423"/>
        </linearGradient>
      </defs>

      <g class="joined-shaft">
        <path d="M0 84H260V96H0Z" fill="url(#${id}-horizontal-shaft)"/>
        <path d="M1 87H260" stroke="#F4CB7F" stroke-opacity=".25"/>
        <path d="M1 94H260" stroke="#24190F" stroke-opacity=".35"/>
      </g>

      <g class="joined-head">
        <!-- The silk hangs downward even though the trishul is horizontal. -->
        <g class="joined-cloth">
          <path class="cloth-ribbon cloth-ribbon-back" fill="#861C19" d="M184 113C176 139 166 152 175 173C188 195 162 207 174 225C181 235 177 244 180 250C178 238 194 231 186 217C176 200 203 188 190 170C182 152 201 131 198 115Z">
            <animate attributeName="d" dur="2.9s" repeatCount="indefinite" values="M184 113C176 139 166 152 175 173C188 195 162 207 174 225C181 235 177 244 180 250C178 238 194 231 186 217C176 200 203 188 190 170C182 152 201 131 198 115Z;M184 113C195 138 181 154 169 173C156 194 185 208 177 226C170 237 183 245 177 250C189 243 183 233 195 219C207 202 180 190 186 172C195 152 209 133 198 115Z;M184 113C175 138 183 153 194 173C207 193 178 208 189 226C196 237 188 245 193 250C193 238 209 230 201 217C191 200 219 188 207 170C195 151 197 132 198 115Z;M184 113C176 139 166 152 175 173C188 195 162 207 174 225C181 235 177 244 180 250C178 238 194 231 186 217C176 200 203 188 190 170C182 152 201 131 198 115Z" calcMode="spline" keyTimes="0;.33;.67;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/>
          </path>
          <path class="cloth-ribbon cloth-ribbon-main" fill="url(#${id}-hanging-crimson)" d="M187 112C185 138 176 153 183 170C191 189 169 201 176 216C181 227 186 229 181 242C197 233 190 224 197 214C211 198 213 185 202 170C194 155 211 132 208 114Z">
            <animate attributeName="d" dur="2.65s" repeatCount="indefinite" values="M187 112C185 138 176 153 183 170C191 189 169 201 176 216C181 227 186 229 181 242C197 233 190 224 197 214C211 198 213 185 202 170C194 155 211 132 208 114Z;M187 112C199 136 194 153 180 170C167 189 188 200 194 216C200 229 187 236 192 244C198 231 212 226 207 213C200 197 187 187 199 171C215 153 218 133 208 114Z;M187 112C179 138 174 152 191 169C208 187 193 202 188 216C183 230 199 233 194 244C211 234 204 225 212 213C225 196 228 183 214 168C200 151 214 133 208 114Z;M187 112C185 138 176 153 183 170C191 189 169 201 176 216C181 227 186 229 181 242C197 233 190 224 197 214C211 198 213 185 202 170C194 155 211 132 208 114Z" calcMode="spline" keyTimes="0;.33;.67;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/>
          </path>
          <path class="cloth-ribbon cloth-ribbon-gold" fill="url(#${id}-hanging-saffron)" d="M201 115C216 139 201 157 209 175C218 195 206 208 215 224C220 231 217 237 221 244C225 233 223 226 227 216C234 198 222 188 224 174C227 155 236 135 215 117Z">
            <animate attributeName="d" dur="2.4s" repeatCount="indefinite" values="M201 115C216 139 201 157 209 175C218 195 206 208 215 224C220 231 217 237 221 244C225 233 223 226 227 216C234 198 222 188 224 174C227 155 236 135 215 117Z;M201 115C206 139 220 154 212 174C203 195 223 206 218 222C214 233 224 239 220 245C231 237 225 228 234 215C244 198 222 187 230 171C239 152 227 134 215 117Z;M201 115C219 139 210 155 224 174C240 192 224 208 230 224C233 234 226 238 231 245C236 233 243 225 238 213C229 195 251 185 237 169C224 153 236 135 215 117Z;M201 115C216 139 201 157 209 175C218 195 206 208 215 224C220 231 217 237 221 244C225 233 223 226 227 216C234 198 222 188 224 174C227 155 236 135 215 117Z" calcMode="spline" keyTimes="0;.33;.67;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/>
          </path>
          <path class="cloth-ribbon cloth-ribbon-fold" fill="url(#${id}-hanging-fold)" d="M194 117C192 139 181 155 190 172C199 186 183 199 186 211C188 218 191 221 189 227C201 221 197 211 205 202C215 188 212 178 205 169C196 156 216 134 209 118Z">
            <animate attributeName="d" dur="2.65s" repeatCount="indefinite" values="M194 117C192 139 181 155 190 172C199 186 183 199 186 211C188 218 191 221 189 227C201 221 197 211 205 202C215 188 212 178 205 169C196 156 216 134 209 118Z;M194 117C205 139 198 155 185 172C172 187 193 200 197 212C201 220 195 225 198 230C209 221 214 212 205 201C193 187 193 181 203 169C216 153 217 134 209 118Z;M194 117C184 139 184 154 198 172C212 186 205 201 196 212C191 218 202 226 200 230C212 221 208 215 216 204C228 187 222 177 211 167C198 153 216 134 209 118Z;M194 117C192 139 181 155 190 172C199 186 183 199 186 211C188 218 191 221 189 227C201 221 197 211 205 202C215 188 212 178 205 169C196 156 216 134 209 118Z" calcMode="spline" keyTimes="0;.33;.67;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/>
          </path>
        </g>
        <g transform="translate(425 0) rotate(90)">${crown}</g>
      </g>
    </svg>`;
  };
})();
