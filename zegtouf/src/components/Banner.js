import img from "./../elements/group67.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const visible = {
    
  }
  return ( 
    <section className="banner" id="about">
      <div className="blured"></div>
      <div className="container bnr">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            <span className="text-2xl tracking-widest italic">Hellow, I am</span>
            <h1>safie errahmane zegtouf</h1>
          </div>
          <div ref={ref} className="col-span-12 lg:col-span-6 relative flex items-center justify-center">
            <img animate={{width: '100%', skewX: 10}} src={img} alt="note" />
            <motion.div className="float" initial={{width: '0', height: '0'}} transition={{duration: 1, delay: 1}} animate={{width: '100%', height: '100%'}}>
              <motion.img
              animate={{
                y: [0, 8, 0, 8, 0, 8],
              }}
              
              src={require("./../elements/ai.png")} alt="" />
              <img src={require("./../elements/dl.png")} alt="" />
              <img src={require("./../elements/pin.png")} alt="" />
              <img src={require("./../elements/plk.png")} alt="" />
              <img src={require("./../elements/pr.png")} alt="" />
            </motion.div>
            
          </div>
          
        </div>
        <div className="line bottom-8"></div>
      </div>
      <div className="container desc">
        <div className="title">
          <h1>who am i :</h1>
          <motion.div initial={{width: '0'}} transition={{duration: 1}} animate={{width: '150%'}} className="yellow-line top-4 ml-36 w-[150%]"></motion.div>
        </div>
        
        
        <div className="text">
          <p>&nbsp;&nbsp;
            Detail-oriented programmer and graphic designer 
            proficient in C, Python, HTML5, CSS3, React, Figma, Adobe 
            Photoshop, and Illustrator.
          </p>
          <p>&nbsp;&nbsp;
            Skilled in digital project 
            management, multitasking, and delivering high-quality 
            results. Seeking to enhance computer science knowledge 
            through a bachelor's degree program
          </p>
          <p>&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolores hic sequi laborum accusantium saepe totam cupiditate, tempora et sit blanditiis alias iusto debitis quidem maiores. Qui ut exercitationem quidem.</p>
        </div>

        <motion.div initial={{width: '0'}} transition={{delay: .2, duration: 1 /*type: 'spring', stiffness: 500*/}} animate={{width: '150%'}} className="yellow-line bullet bottom-0 left-[-60%] w-[150%]"></motion.div>
        
      </div>
    </section>
  );
}
 
export default Banner;