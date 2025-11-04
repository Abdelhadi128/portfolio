import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { H1 } from "@/components/ui/typography";

export default function CertificatesSection() {
    const certificates = [
        {
            name:'',
            // certificates
            path:'js1.png'
        },
        {
            name:'',
            // certificates
            path:'js2.png'
        },
        {
            name:'',
            // certificates
            path:'py1.png'
        }
        ,{
            name:'',
            // certificates
            path:'py2.png'
        }
    ]
    return (
        <div id="certificates" className="w-full h-screen flex flex-col items-center py-20 sm:py-20 md:py-20 overflow-x-hidden relative">
            <div className="w-full h-full flex flex-col items-center">
                <H1 className="text-primary font-fira text-center mb-10 underline underline-offset-8">
                    Certificates
                </H1>
                {/* 50% on small screens and 33% on larger screens. */}
                <div className="w-full h-full flex flex-col items-center justify-center px-3 sm:px-6 md:container relative">
                    <Carousel >
                        <CarouselContent>
                            {certificates.map((certif)=>(
                                <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 flex flex-col items-center rounded-xl">
                                    <img className="rounded-xl object-cover" src={'/public/certificates/' + certif.path} alt="" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className="text-primary border dark:hover:border-2 dark:border-primary"/>
                        <CarouselPrevious className="text-primary border dark:hover:border-2 dark:border-primary"/>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
