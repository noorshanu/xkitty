import React from 'react'

function Photo() {
  return (
    <section>
        <div>
        <div class="marquee">
  <div class="marquee__group">
  <img src='images/hero.png' alt='' className='h-auto'/>
    <img src='images/hero2.png' alt='' className='h-auto'/>
    <img src='images/about.png' alt='' className='h-auto'/>
    <img src='images/hero.png' alt='' className='h-auto'/>
    <img src='images/hero2.png' alt='' className='h-auto'/>
    <img src='images/about.png' alt='' className='h-auto'/>
  </div>

  <div aria-hidden="true" class="marquee__group">
    <img src='images/hero.png' alt='' className='h-auto'/>
    <img src='images/hero2.png' alt='' className='h-auto'/>
    <img src='images/about.png' alt='' className='h-auto'/>
    <img src='images/hero.png' alt='' className='h-auto'/>
    <img src='images/hero2.png' alt='' className='h-auto'/>
    <img src='images/about.png' alt='' className='h-auto'/>
  </div>
</div>

<div class="marquee marquee--borders" style={{"--duration": '100s'}}>
  <div class="marquee__group">
    <p>Spider Monkey</p>
    <p aria-hidden="true">Spider Monkey Sol</p>
    <p aria-hidden="true">Spider Monkey Sol</p>
  </div>

  <div aria-hidden="true" class="marquee__group">
    <p>Spider Monkey Sol</p>
    <p>Spider Monkey Sol</p>
    <p>Spider Monkey Sol</p>
  </div>
</div>

<div class="marquee marquee--reverse">



</div>
        </div>
    </section>
  )
}

export default Photo