/*

banner.js

Ensures a banner image extends to the base of the viewport

(C) 2017 Spoton.net Limited - http://spoton.net/
Created by Stephen Morley - http://stephenmorley.org/

*/

if (!W.EDIT_MODE){
  runOnLoad(function(){

    const banner       = document.querySelector('#banner')
    const image        = banner.querySelector('img')
    const content      = document.querySelector('#bannerContent')
    const contentInner = document.querySelector('#bannerContent > div')

    banner.removeChild(image)
    banner.style.background = 'url(' + image.src + ')'

    window.addEventListener('resize', update)
    update()

    function update(){

      const contentStyle = window.getComputedStyle(content)

      banner.style.height = contentInner.clientHeight
                          + parseInt(contentStyle.top)
                          // Firefox flips the sign when the height is 0
                          + Math.abs(parseInt(contentStyle.bottom))
                          + 'px'

      banner.style.minHeight = window.innerHeight
                             - window.pageYOffset
                             - banner.getBoundingClientRect().top
                             + 'px'

    }

  })
}
