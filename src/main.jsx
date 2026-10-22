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
function App(){const page=useScrollReveal(); return <main ref={page} className="evee-page" id="top"><header className="site-header"><Brand/><nav className="nav-links" aria-label="Main navigation"><a href="#scooters">Scooters</a><a href="#compare">Compare</a><a className="nav-pill" href="#scooters">Explore models</a></nav></header><section className="hero"><div className="hero-copy"><div className="eyebrow">Evee electric scooters</div><h1>City, meet<br/><span>your evee.</span></h1><p>Find your fit from Evee’s electric scooter range. Compare the models, specs and prices.</p><a className="hero-link" href="#scooters">Explore scooters <span aria-hidden="true">↘</span></a></div><div className="hero-art"><img src="/images/lineup.png" alt="Evee electric scooter lineup and lithium range" fetchPriority="high"/></div></section><section className="models-section" id="scooters"><div className="section-inner"><div className="section-heading"><div><div className="eyebrow">The range</div><h2>Choose your scooter.</h2></div><p>Two models, with the details from their Evee product flyers.</p></div><div className="product-grid">{models.map(model=><article className="product-card" key={model.name}><a className="product-image" href={'/images/'+model.image} target="_blank" rel="noreferrer" aria-label={'View '+model.name+' poster full size'}><img src={'/images/'+model.image} alt={model.name+' scooter and product specifications'} loading="lazy"/></a><div className="product-info"><div className="product-top"><h3>{model.name}</h3><div className="price">PKR {model.price}</div></div><div className="spec-line"/><div className="spec-summary">{model.specs}</div></div></article>)}</div></div></section><section className="comparisons" id="compare"><div className="section-inner"><div className="section-heading"><div><div className="eyebrow">At a glance</div><h2>Compare the range.</h2></div><p>Full Evee comparison charts for lithium and graphene models.</p></div>{[{name:'Lithium',file:'lithium.png',copy:'Prices, motor power, battery, charging time and range from Evee’s lithium comparison.'},{name:'Graphene',file:'scooter-4.jpg',copy:'Compare listed Evee graphene models by price and specifications.'}].map(chart=><article className="comparison-block" key={chart.name}><div className="comparison-heading"><h3>{chart.name} models</h3><p>{chart.copy}</p></div><div className={'comparison-image comparison-image--'+chart.name.toLowerCase()} role="region" aria-label={chart.name+' models comparison chart'} tabIndex={0}><a href={'/images/'+chart.file} target="_blank" rel="noreferrer" aria-label={'Open '+chart.name+' comparison full size'}><img src={'/images/'+chart.file} alt={'Evee '+chart.name+' models comparison chart with specifications and prices'} loading="lazy"/></a></div></article>)}<p className="source-note">Details are reproduced from the supplied flyers. Model posters and charts may differ; confirm current prices and specifications with Evee.</p></div></section><footer className="site-footer"><div className="footer-inner"><Brand/><div className="footer-note">Evee electric scooters · Pakistan</div></div></footer></main>}
createRoot(document.getElementById('root')).render(<App/>);



