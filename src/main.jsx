import React, {useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
const models=[{name:'S1 Air',price:'279,000',image:'scooter-2.jpg',specs:<> <strong>75 kmph</strong> · 2200W · Graphene<br/><strong>72V 38Ah</strong> · 7 hours · 100 km</>},{name:'SQUBE',price:'289,000',image:'scooter-1.jpg',specs:<><strong>65 km/hr</strong> · 2000–2500W · BYD Lithium<br/><strong>76.8V 30Ah</strong> · 4–5 hours · 80–90 km</>}];
function Brand(){return <a className="brand" href="#top" aria-label="Evee home"><img src="/images/logo.jpg" alt="Evee"/></a>}
function useScrollReveal(){
 const page = useRef(null);
 useEffect(()=>{
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(reducedMotion.matches || !('IntersectionObserver' in window)) return;
  const elements = [...page.current.querySelectorAll('.section-heading, .product-card, .comparison-heading, .comparison-image, .footer-inner')];
  const observer = new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting){
     entry.target.classList.add('is-visible');
     observer.unobserve(entry.target);
    }
   });
  },{threshold:0,rootMargin:'0px 0px -24px 0px'});
  elements.forEach(element=>{
   if(element.getBoundingClientRect().top >= window.innerHeight){
    element.classList.add('scroll-reveal');
    observer.observe(element);
   }
  });
  const revealAll=()=>{
   if(reducedMotion.matches){
    observer.disconnect();
    elements.forEach(element=>element.classList.remove('scroll-reveal'));
   }
  };
  reducedMotion.addEventListener('change',revealAll);
  return ()=>{
   observer.disconnect();
   reducedMotion.removeEventListener('change',revealAll);
   elements.forEach(element=>element.classList.remove('scroll-reveal','is-visible'));
  };
 },[]);
 return page;
}
function SocialLinks(){
 return <nav className="footer-socials" aria-label="Follow Evee on social media">
  <a className="social-link social-instagram" href="https://www.instagram.com/eveepowertronmotors/" target="_blank" rel="noopener noreferrer" aria-label="Evee on Instagram (opens in a new tab)" title="Instagram">
   <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><defs><radialGradient id="instagram-colors" cx="30%" cy="105%" r="115%"><stop offset="0" stopColor="#ffdc80"/><stop offset=".3" stopColor="#fcaf45"/><stop offset=".55" stopColor="#fd1d1d"/><stop offset=".75" stopColor="#c13584"/><stop offset="1" stopColor="#5851db"/></radialGradient></defs><rect width="32" height="32" rx="9" fill="url(#instagram-colors)"/><rect x="7" y="7" width="18" height="18" rx="5.5" fill="none" stroke="white" strokeWidth="2.1"/><circle cx="16" cy="16" r="4.4" fill="none" stroke="white" strokeWidth="2.1"/><circle cx="22" cy="10" r="1.3" fill="white"/></svg>
  </a>
  <a className="social-link social-facebook" href="https://web.facebook.com/profile.php?id=61593589011599" target="_blank" rel="noopener noreferrer" aria-label="Evee on Facebook (opens in a new tab)" title="Facebook">
   <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="16" fill="#1877f2"/><path fill="white" d="M18.3 32V19.6h4.2l.6-4.8h-4.8v-3.1c0-1.4.4-2.3 2.4-2.3h2.5V5.1c-.4-.1-1.9-.2-3.6-.2-3.6 0-6.1 2.2-6.1 6.3v3.6H9.4v4.8h4.1V32z"/></svg>
  </a>
  <a className="social-link social-tiktok" href="https://www.tiktok.com/@eveepowertronmotors" target="_blank" rel="noopener noreferrer" aria-label="Evee on TikTok (opens in a new tab)" title="TikTok">
   <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="9" fill="#101010"/><path id="tiktok-note" d="M18 6h3.5c.3 2.7 1.9 4.3 4.5 4.6v3.5a10 10 0 0 1-4.5-1.4v8.1a6.8 6.8 0 1 1-5.8-6.7v3.6a3.3 3.3 0 1 0 2.3 3.1V6z" fill="#25f4ee" transform="translate(-.8 .6)"/><path d="M18 6h3.5c.3 2.7 1.9 4.3 4.5 4.6v3.5a10 10 0 0 1-4.5-1.4v8.1a6.8 6.8 0 1 1-5.8-6.7v3.6a3.3 3.3 0 1 0 2.3 3.1V6z" fill="#fe2c55" transform="translate(.7 -.4)"/><path d="M18 6h3.5c.3 2.7 1.9 4.3 4.5 4.6v3.5a10 10 0 0 1-4.5-1.4v8.1a6.8 6.8 0 1 1-5.8-6.7v3.6a3.3 3.3 0 1 0 2.3 3.1V6z" fill="white"/></svg>
  </a>
 </nav>;
}
const locations = [
 {name:'Korangi No. 5',address:'Shop No.10, Main Landhi Road, Korangi Number 5 Rd, near Rashid Latif Academy, Sector 36 J Landhi Town, Karachi, Pakistan',map:'https://maps.app.goo.gl/pWtptrhKoonEZM8Y9',phone:'03302244399'},
 {name:'Landhi Road',address:'R4FQ+7HX, Landhi Rd, Sector 33/A Sector 41 A Korangi, Karachi, Pakistan',map:'https://maps.app.goo.gl/d9gLMXa8kGgEW7FU6',phone:'03102590444'},
 {name:'Shah Faisal Colony',address:'V4PV+479, Plot # SB-34 A-1 Rd, Block 1 Shah Faisal Colony 1 Shah Faisal Colony, Shah Faisal Town, 75230, Pakistan',map:'https://maps.app.goo.gl/DBKek7YPxAztkM1E7',phone:'03700811365'}
];
function ContactIcon({type}){
 return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{type==='pin'?<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>:type==='phone'?<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z"/>:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>}</svg>;
}
function FooterContact(){
 return <div className="footer-contact section-inner">
  <div className="footer-contact-heading"><div><div className="eyebrow">LET’S CONNECT</div><h2>Visit us in Karachi.</h2></div><a className="footer-email" href="mailto:eveepowertronmotors@gmail.com"><span className="contact-icon"><ContactIcon type="mail"/></span><span><span className="contact-label">Email us</span><span className="email-address">eveepowertronmotors@gmail.com</span></span></a></div>
  <div className="location-grid">{locations.map((location,index)=><article className="location-card" key={location.phone}><div className="location-title"><span className="contact-icon"><ContactIcon type="pin"/></span><div><span className="contact-label">Location 0{index+1}</span><h3>{location.name}</h3></div></div><address>{location.address}</address><a className="location-phone" href={'tel:+92'+location.phone.slice(1)}><ContactIcon type="phone"/><span>{location.phone}</span></a><a className="location-directions" href={location.map} target="_blank" rel="noopener noreferrer" aria-label={'Get directions to '+location.name+' on Google Maps (opens in a new tab)'}>Get directions <span aria-hidden="true">↗</span></a></article>)}</div>
 </div>;
}
function App(){const page=useScrollReveal(); return <main ref={page} className="evee-page" id="top"><header className="site-header"><Brand/><nav className="nav-links" aria-label="Main navigation"><a href="#scooters">Scooters</a><a href="#compare">Compare</a><a className="nav-pill" href="#scooters">Explore models</a></nav></header><section className="hero"><div className="hero-copy"><div className="eyebrow">Evee electric scooters</div><h1>City, meet<br/><span>your evee.</span></h1><p>Find your fit from Evee’s electric scooter range. Compare the models, specs and prices.</p><a className="hero-link" href="#scooters">Explore scooters <span aria-hidden="true">↘</span></a></div><div className="hero-art"><img src="/images/lineup.png" alt="Evee electric scooter lineup and lithium range" fetchPriority="high"/></div></section><section className="models-section" id="scooters"><div className="section-inner"><div className="section-heading"><div><div className="eyebrow">The range</div><h2>Choose your scooter.</h2></div><p>Two models, with the details from their Evee product flyers.</p></div><div className="product-grid">{models.map(model=><article className="product-card" key={model.name}><a className="product-image" href={'/images/'+model.image} target="_blank" rel="noreferrer" aria-label={'View '+model.name+' poster full size'}><img src={'/images/'+model.image} alt={model.name+' scooter and product specifications'} loading="lazy"/></a><div className="product-info"><div className="product-top"><h3>{model.name}</h3><div className="price">PKR {model.price}</div></div><div className="spec-line"/><div className="spec-summary">{model.specs}</div></div></article>)}</div></div></section><section className="comparisons" id="compare"><div className="section-inner"><div className="section-heading"><div><div className="eyebrow">At a glance</div><h2>Compare the range.</h2></div><p>Full Evee comparison charts for lithium and graphene models.</p></div>{[{name:'Lithium',file:'lithium-updated.jpg',copy:'Prices, motor power, battery, charging time and range from Evee’s lithium comparison.'},{name:'Graphene',file:'graphene-latest.png',copy:'Compare listed Evee graphene models by price and specifications.'}].map(chart=><article className="comparison-block" key={chart.name}><div className="comparison-heading"><h3>{chart.name} models</h3><p>{chart.copy}</p></div><div className={'comparison-image comparison-image--'+chart.name.toLowerCase()} role="region" aria-label={chart.name+' models comparison chart'} tabIndex={0}><a href={'/images/'+chart.file} target="_blank" rel="noreferrer" aria-label={'Open '+chart.name+' comparison full size'}><img src={'/images/'+chart.file} alt={'Evee '+chart.name+' models comparison chart with specifications and prices'} loading="lazy"/></a></div><a className="chart-fullsize" href={'/images/'+chart.file} target="_blank" rel="noreferrer">Tap to open full size <span aria-hidden="true">↗</span></a></article>)}<p className="source-note">Details are reproduced from the supplied flyers. Model posters and charts may differ; confirm current prices and specifications with Evee.</p></div></section><footer className="site-footer"><FooterContact/><div className="footer-inner"><div className="footer-identity"><Brand/><div className="footer-note">Evee electric scooters · Pakistan</div></div><div className="footer-follow"><span>Follow our journey</span><SocialLinks/></div></div></footer></main>}
createRoot(document.getElementById('root')).render(<App/>);








