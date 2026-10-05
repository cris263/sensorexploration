// Menú móvil
const t=document.querySelector('.nav-toggle'),n=document.querySelector('.nav');
if(t){t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)})}

// Sismograma decorativo del hero (trazas con reflexiones)
const s=document.getElementById('seismic');
if(s){
  const W=1200,H=600,N=60,NS="http://www.w3.org/2000/svg";
  s.setAttribute('viewBox',`0 0 ${W} ${H}`);s.setAttribute('preserveAspectRatio','xMidYMid slice');
  const refl=[[150,1],[250,-.7],[340,1.2],[430,-.9],[520,.8]]; // [profundidad, amplitud]
  for(let i=0;i<N;i++){
    const x=20+i*(W-40)/(N-1);let pts=[];
    for(let y=0;y<=H;y+=4){
      let a=0;
      refl.forEach(([z,k])=>{const zz=z+Math.sin(i/9)*18+i*0.6;a+=k*Math.exp(-Math.pow((y-zz)/7,2))*Math.sin((y-zz)/2.2)});
      a+=Math.sin(y*.9+i)*.05;pts.push([x+a*11,y]);
    }
    const p=document.createElementNS(NS,'path');
    p.setAttribute('d','M'+pts.map(q=>q[0].toFixed(1)+','+q[1]).join(' L'));
    p.setAttribute('fill','none');p.setAttribute('stroke','#5BA23A');p.setAttribute('stroke-width','1.1');
    s.appendChild(p);
  }
}

// Formulario (demo: conectar a tu backend o a Formspree)
const f=document.getElementById('form-contacto');
if(f){f.addEventListener('submit',e=>{e.preventDefault();f.querySelector('button').textContent='Mensaje enviado';})}
