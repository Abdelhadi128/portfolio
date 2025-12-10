import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { H1 } from "@/components/ui/typography";
import { motion, type Variants } from "framer-motion";

export default function CertificatesSection() {
  const certificates = [
    { name: "", path: "js1.png", pdf: "javascript1.pdf" },
    { name: "", path: "js2.png", pdf: "javascript2.pdf" },
    { name: "", path: "py1.png", pdf: "python1.pdf" },
    { name: "", path: "py2.png", pdf: "python2.pdf" }
  ];

  // Animation variants
  const containerVariants:Variants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      id="certificates"
      className="w-full h-screen flex flex-col items-center py-20 sm:py-20 md:py-20 overflow-x-hidden relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-full h-full flex flex-col items-center">
        <H1 className="text-primary font-fira text-center mb-10 underline underline-offset-8">
          Certificates
        </H1>

        <motion.div
          className="w-full h-full flex flex-col items-center justify-center px-3 sm:px-6 md:container relative"
          variants={containerVariants}
        >
          <Carousel>
            <CarouselContent>
              {certificates.map((cert, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/1 md:basis-1/2 lg:basis-1/3 flex flex-col items-center rounded-xl"
                >
                  <motion.a href={"/certificates/"+cert.pdf} variants={itemVariants}>
                    <img
                      className="rounded-xl object-cover shadow-lg"
                      src={"/public/certificates/" + cert.path}
                      alt=""
                    />
                  </motion.a>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext className="text-primary border dark:hover:border-2 dark:border-primary" />
            <CarouselPrevious className="text-primary border dark:hover:border-2 dark:border-primary" />
          </Carousel>
        </motion.div>
      </div>
    </motion.div>
  );
}
