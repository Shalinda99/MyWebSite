// import content
import { useEffect } from "react";
import { content } from "../Content";
import { useTrail, animated } from 'react-spring';

const Hero = () => {
  const { hero } = content;
  const trail = useTrail(hero.hero_content.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
  });

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row  flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-teal-200 bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {/* {hero.firstName}{" "} */}
            <span className="text-indigo-800">{hero.firstName}{" "}</span>
            <span className="text-dark_primary">{hero.LastName}</span>
            {/* {hero.fName}{" "} */}
            <br></br>
            <span className="text-indigo-800">{hero.fName}{" "}</span>
            <span className="text-dark_primary">{hero.LName}</span>
          </h1>
        </div>
        

        {/* first col */}
        <div className="pb-60 px-6 pt-5 " data-aos="fade-down">
        <h2 className="text-7xl ">{hero.title}</h2>

          <br />
          <div className="flex justify-end" >
            {/* <button className="btn">{hero.btnText}</button> */}
          </div>
          <div className="flex flex-col gap-2 mt-5 ">
            {hero.hero_content.map((content, i) => (
             <div className="flex flex-col gap-1 mt-1">
             {trail.map((style, i) => (
               <animated.div
                 key={i}
                 style={style}
                 data-aos="fade-down"
                 data-aos-delay={i * 300}
                 className={`flex items-center w-70  ${i === 1 && 'flex-row-reverse '}`}
               >
                 {/* <h3>{hero.hero_content[i].count}</h3> */}
                 <p>{hero.hero_content[i].text}</p>
               </animated.div>
             ))}
           </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
