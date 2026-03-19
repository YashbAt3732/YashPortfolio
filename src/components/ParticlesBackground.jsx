import { useEffect, useRef } from "react"

export default function ParticlesBackground(){
  const canvasRef=useRef(null);
  useEffect(()=>{
    //created a canvas for particles
    const canvas=canvasRef.current;
    const ctx=canvas.getContext("2d");
    //particle array to store
    let particles=[];
    const particleCount=50; //their count
    const colors=["rgba(255,255,255,0.7)"]; //their color
    //behaviour
    class Particle{
      constructor(){
        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.radius=Math.random()*2+1;
        this.color=colors[Math.floor(Math.random()*colors.length)];
        this.speedX=(Math.random()-0.5)*0.5;
        this.speedY=(Math.random()-0.5)*0.5; 
      }
      draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.shadowBlur=10;
        ctx.shadowColor=this.color;
        ctx.fillStyle=this.color;
        ctx.fill();
      }
      update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
        if(this.x<0) this.x=canvas.width; // it is when the particle goes out from the canvas from left.. it should come from right
        if(this.x>canvas.width) this.x=0;
        if(this.y<0) this.y=canvas.height;
        if(this.y>canvas.height) this.y=0;
        this.draw();

      }
    }
    function createParticles(){
      particles=[];
      for(let i=0;i<particleCount;i++){
        particles.push(new Particle());
      }
    }
    //function for if the window resizes the particle act accordingly
    function handleResize(){
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;
      createParticles();
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    //function for keeping the animation in loop
    let animationId;
    function animate(){
      ctx.clearRect(0, 0, canvas.width, canvas.height); //as we move to the next frame, this is to clear the previous frame so that the trail is not left behind
      particles.forEach((p)=>{p.update()});
      animationId=requestAnimationFrame(animate);
    }
    animate();
    return ()=>{
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    }
  },[])

  return (
    <canvas 
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    > 
    </canvas>
  )
}