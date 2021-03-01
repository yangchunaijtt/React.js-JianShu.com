import { createGlobalStyle } from 'styled-components'

const Iconfont = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1614582758447'); /* IE9 */
  src: url('./iconfont.eot?t=1614582758447#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAbIAAsAAAAADPAAAAZ6AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqNEIptATYCJAMUCwwABCAFhG0HRhv3ClGUDlKA7EdC5nalZihCo9Iou40HBP9HEK2hs3cXQvCANipChlWEQVXVSlfbRugiGPHzj5v2gTIJYhHqqRkVt0jFgCVUNGTi0DlsjuyNTqx6JoKciSQclenPH0u+zCXmW9u5VOa/RQTgaMADimzcaDQuGogV6QBhCrpJiqlesB1PoNGoVILDuhYCbFAYykC72zGTHmxImZQaTqjX1pZsW8QbIFafXglfALz2Pz7+y4oNJDWZse7pee0mUPELfN4psvxvMeBagGc8B7iFyFgGFE5zV6q/BVUoRSKNriC7O/hcvST98lneZ6Wfd/5fEct2pGk0UbKk4JcnahmqZhB204VfwHbIzlCMZhK/Sh2KexNDci+qGtK1Ed1AmiHmfwz6sAPXKbLatWzB9sL8koINGxCJVBoUpUat82+nUJcLJhwOBHFex2jY6yW8/raX/JRr8dpZxOcjqQ3oQIDGSKcTw5ZCdiD+QrTbjaKuRZjwYMVIwNf6oo/smL+EuVG/n6IVxAAOB0yNiYET5JjN31SGujyYW+K8Pl5B670+iT2fDxAOyDaMwqMh1xGEdDpaI5DA5kKp7qk7WBvsmF/7bFuEdCICOzaHjlpw0mnHaG3LIGTzF+kB107b4hpatN3nh2w5fIJ2S+zOZoVnYQJ2LKIwYvasklw7crfE52v08b3gs7EO1u4r3AneLX/OkowwaDOy7QvmV2HyI9ytgCgpAU1IevtcEdCCtkd/v8QOACSAHoFsLwmsNG2FbCXkHcvAsiKxPy4QGIcVaIIpjV5vIEjyISeQMDId7M6Qbzloz9uHPk+3+xxhWyx+PpAelDd4F9sPGOnxjlhX46Fry0BoWbGvCUSSpbW5VABIbcsjJ2R2zCkp+hIC6+rQIC+7xNE+EOOelMSA9Zz549pErfi0IXIyvnp7b7OyQb6s/e3p9i2KupSS/Y+nqroGj9SlNaY9HEaoaM3x0dRWjYrUfm6FROdePh2c+MX82dwJbQK2bt4YOXcivmob3Z/cYX5NavGjQe0oquoaOsSTjzFd+vqV3YlvWU3990WdvxjTcCAmok43dERNpn7+WEbQLeEpivp2fnFlLrw8jW5SbuuJq4rpDasQw+WJwaevLOacCk5KwT0hx69alEGg4aVP0ZzWcoylNG8+z4nwU7eGqLsHDtWmRsxH12c/S2mOmVJaJuHhlEeAcNzi1cUsoXfpF3P0u9BE8ZmN+GT0nfHVO/paVCZdBR++9lTnFkWj9q2skzulESny2g7u7hU8fbNyKxVXOTHQH5Yh3viuLz7k1OmFzNNXgkNil4JPXbUIRQ0vC/KGyZSWE6M9mjdz6sGB6Mj6tOHDqm4M68rBF4oHfshAJ69oSIIuf1yKIqrOgQN1aRHzUXUg+z2tOcokN483NWmGsHv0ls5d6Ao3eVp/PYebwNAEr34iOuFkn9P2nlaVCTzC1r+aWPMqI//fcOAfL2snhVWGsbJA0N9lZv7JgnSBeE83k0SNyQYlzRVFnwzR/PPByN8hcT/GRYCTQ6uiD7+KVkSrrmKVFcQC8JG/0j7hzTcLHfl+VgAhzYd8H+InxouKvrP++wQZ376nirwvTC/N3tL6SVV05xrcm0dEuXIKyO8GY8Xlb+x09pVWx/5REzqsbO9uMURuwd+rV28BvytZ9aCajdmiznkJbGn8AWzpuN6oNkWb1EPiigqx2qR6ScW6ZMPeDIwCqJjsS68B1f/5kQyolvP7ue0tXs7980LqsKLk1w2SD3vWB8Mdn/k9KqaA/ADAq6jWWvzOiltOKqrUUNRo07JFLapr4gSs9yRez0Fvqq/Te+NYe4yZCfV6YkjqjEBWbxpTCMtQo8k21Kq3A42W1O/cpAtHJEoDFh2gILS7GZJWbyFr9yKmEN6FGr2+hVrtIYJGZ6HZZ5PZGIOqOUbPM5tww3Z8zDgzzVpWHgradzGmzZN6Lin1KyiGM49F8UxdRjZbz0wz3BgbmLeYsniexVluZgqvo07GTE7O4LPczDhj5HWjPD9blJ7Olm2oM85MAcgBDkOPdxtugjPYzjvGaMY0dmYelHv/LgyTzSbpcTXDKrwUBsdsbO64TDoZLTD1qulWw66lq9kWJll44mDhdl/OjCm4OuJgTJqpGbjZ8qXGMYx4OqM9ErOKpJPp2LYq3fyaqWcs/sMY0Th3TaTIUaImatVdMNOmbWPTwkr9+jQzo+eMo6KkkwEAAAA=') format('woff2'),
  url('./iconfont.woff?t=1614582758447') format('woff'),
  url('./iconfont.ttf?t=1614582758447') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1614582758447#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`

export default Iconfont;
