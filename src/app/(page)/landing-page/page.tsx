'use client'
import Navbar from '@/components/Navbar'
import * as React from 'react'
import styles from '@/css/styles.module.css'
import Image from 'next/image'
import { CirclePlay, ArrowRight, Dot, CircleCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export default function LandingPage() {
  const [buttonState, SetButtonState] = React.useState(false)
  const [buttonState2, SetButtonState2] = React.useState(false)
  const [buttonState3, SetButtonState3] = React.useState(false)
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const handleMouseEnter = (index: number) => {
    if (index == 1)
      SetButtonState(true)
    else if (index == 2)
      SetButtonState2(true)
    else
      SetButtonState3(true)
  }
  const handleMouseLeave = (index: number) => {
    if (index == 1)
      SetButtonState(false)
    else if (index == 2)
      SetButtonState2(false)
    else
      SetButtonState3(false)
  }
  return (
    <>
      <Navbar />
      <main>
        <section className="flex flex-col-reverse md:flex-row justify-between items-center py-10  mb-[141px]">
          <div className='px-4 md:px-20'>
          <div className="md:w-[570px]   w-full">
            <h1 className="text-3xl leading-snug md:text-[69.6px] font-semibold mb-4 md:mb-6">
              <span className="text-orange-600">Transform ideas</span> <br /> into apps
              with AI
            </h1>
            <p className="text-sm md:text-[17.px] mb-6 md:mb-[40px]" style={{color:"#374151"}}>
              Step into a new era of strategic decision-making. Horizon empowers
              businesses in the marketing space with unparalleled
            </p>
            <div className='md:w-[163px] w-32'>
              <Button variant="destructive" className='w-full'>Get started&rarr;</Button>
            </div>
            </div>
          </div>
          <div className="mb-8 md:mb-0 ">
            <div className="bg-black w-full md:w-[524.38px] h-auto md:h-[431.92px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <CirclePlay className="w-[72px] md:w-[144px] h-[48px] md:h-[96px]" />
              </div>
              <Image
                src={'/Ipad.png'}
                alt="Navbar logo"
                width={524.38}
                height={388.17}
                className="inline rounded-sm w-full"
              />
            </div>
          </div>
        </section>
        <section id='features' className='mb-[141px]'>
  

          <div id='features-heading' className='flex flex-col justify-center items-center mb-[128px]'>
            <div className='w-full max-w-[500px]  '>
              {/* <p className='text-blue-500 mb-4 text-center'>Our services</p> */}
              <h2 className='text-2xl md:text-[50px] leading-snug  font-semibold text-center mb-4'>
                Explore the power of<br />AI apps generation
              </h2>
              <p className='text-center text-[17.9px]' style={{color:"#374151"}}>
                Unlock the full potential of your tech stack with Horizon&apos;s intuitive and Unlock the full
                potential of your tech stack with GenAI&apos;s intuitive and
              </p>
            </div>
          </div>


         

          <div id='feature-1' className='px-4 md:px-20 mb-[128px] flex flex-col md:flex-row justify-between '>
            <div className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
              <Image
                src={'/Feature-1.png'}
                alt="Feature 1 img"
                width={524.38}
                height={388.17}
                className="inline rounded-sm max-w-full"
              />
            </div>
            <div className='w-full md:w-[560px]'>
              <h2 className='text-2xl md:text-[51.7px] leading-tight font-semibold mb-4'>
                <span className='text-orange-600'>Unleash</span> the power of AI with GenAI
              </h2>
              <p className='text-base leading-loose text-[17.9px]' style={{color:"#374151"}}>
                Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon&apos;s intuitive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon&apos;s intuitive and
              </p>
            </div>
          </div>
          {/* feature 2 */}
          <div id='feature-1' className='px-4 md:px-20 mb-[128px] flex flex-col md:flex-row-reverse justify-between '>
            <div className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
              <Image
                src={'/Feature-2.png'}
                alt="Feature 2 img"
                width={524.38}
                height={388.17}
                className="inline rounded-sm max-w-full"
              />
            </div>
            <div className='w-full md:w-[560px]'>
              <h2 className='text-2xl md:text-[51.7px] leading-tight font-semibold mb-4'>
                <span className='text-orange-600'>Unleash</span> the power of AI with GenAI
              </h2>
              <p className='text-base leading-loose text-[17.9px]' style={{color:"#374151"}}>
                Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon&apos;s intuitive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon&apos;s intuitive and
              </p>
            </div>
          </div>

          {/* feature-3 */}

          <div id='feature-1' className='px-4 md:px-20 mb-[128px] flex flex-col md:flex-row justify-between '>
            <div className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
              <Image
                src={'/Feature-3.png'}
                alt="Feature 3 img"
                width={524.38}
                height={388.17}
                className="inline rounded-sm max-w-full"
              />
            </div>
            <div className='w-full md:w-[560px]'>
              <h2 className='text-2xl md:text-[51.7px] leading-tight font-semibold mb-4'>
                <span className='text-orange-600'>Unleash</span> the power of AI with GenAI
              </h2>
              <p className='text-base leading-loose text-[17.9px]' style={{color:"#374151"}}>
                Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon&apos;s intuitive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon&apos;s intuitive and
              </p>
            </div>
          </div>
        </section>

        {/* offers */}
        <section id='offers' className='mb-[141px]'>
          <div>
            <h2 className='text-2xl px-3 md:px-20 text-center md:text-[51.7px] leading-tight font-semibold mb-[80px]'><span className='text-orange-600'>Essentially,</span> everything you need to<br /> ship you first AI App</h2>
            <div className='flex justify-center'>
            <div className="hidden md:grid lg:grid md:grid-cols-3 gap-6 px-20">
              {/* Card 1 */}

              <div className='w-full lg:w-[360px]'>
                <Card className='rounded-3xl'>
                  <CardHeader>
                    <CardTitle className='mb-[48px]'><Image
                      src={'/Card-icon.svg'}
                      alt='Navbar logo'
                      width={64}
                      height={65.33}
                      className="inline"
                    /></CardTitle>
                    <CardTitle className='text-[23.8px]'>Quality spps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{color:"#374151"}}>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</p>
                  </CardContent>
                </Card>
              </div>




              {/* Card 2 */}
              <div className='w-full lg:w-[360px]'>
                <Card className='rounded-3xl'>
                  <CardHeader>
                    <CardTitle className='mb-[48px]'><Image
                      src={'/Card-icon.svg'}
                      alt='Navbar logo'
                      width={64}
                      height={65.33}
                      className="inline"
                    /></CardTitle>
                    <CardTitle className='text-[23.8px]'>Quality spps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{color:"#374151"}}>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 3 */}
              <div className='w-full lg:w-[360px]'>
                <Card className='rounded-3xl'>
                  <CardHeader>
                    <CardTitle className='mb-[48px]'><Image
                      src={'/Card-icon.svg'}
                      alt='Navbar logo'
                      width={64}
                      height={65.33}
                      className="inline"
                    /></CardTitle>
                    <CardTitle className='text-[23.8px]'>Quality spps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{color:"#374151"}}>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 4 */}
              <div className='w-full lg:w-[360px]'>
                <Card className='rounded-3xl'>
                  <CardHeader>
                    <CardTitle className='mb-[48px]'><Image
                      src={'/Card-icon.svg'}
                      alt='Navbar logo'
                      width={64}
                      height={65.33}
                      className="inline"
                    /></CardTitle>
                    <CardTitle className='text-[23.8px]'>Quality spps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{color:"#374151"}}>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 5 */}
              <div className='w-full lg:w-[360px]'>
                <Card className='rounded-3xl'>
                  <CardHeader>
                    <CardTitle className='mb-[48px]'><Image
                      src={'/Card-icon.svg'}
                      alt='Navbar logo'
                      width={64}
                      height={65.33}
                      className="inline"
                    /></CardTitle>
                    <CardTitle className='text-[23.8px]'>Quality spps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{color:"#374151"}}>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 6 */}
              <div className='w-full lg:w-[360px]'>
                <Card className='rounded-3xl'>
                  <CardHeader>
                    <CardTitle className='mb-[48px]'><Image
                      src={'/Card-icon.svg'}
                      alt='Navbar logo'
                      width={64}
                      height={65.33}
                      className="inline"
                    /></CardTitle>
                    <CardTitle className='text-[23.8px]'>Quality spps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{color:"#374151"}}>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</p>
                  </CardContent>
                </Card>
              </div>

            </div>
            </div>
            <div className='flex justify-center  md:hidden lg:hidden'>
              <Carousel
                plugins={[Autoplay({ delay: 2000 })]}
                className="w-full  px-4"


              >
                <CarouselContent>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div >
                        <Card className='rounded-3xl'>
                          <CardHeader>
                            <CardTitle><Image
                              src={'/Card-icon.svg'}
                              alt='Navbar logo'
                              width={64}
                              height={65.33}
                              className="inline"
                            /></CardTitle>
                            <CardTitle>Quality spps</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                
              </Carousel>
            </div>
          </div>
        </section>

        {/* plans */}

        <section id='plans' className='mb-[141px]'>
          <div>
            <h2 className='text-2xl px-3 md:px-20 text-center md:text-[51px] leading-tight font-semibold mt-[80px] mb-[80px]'>Start making <span className='text-orange-600'>smarter</span> decisions,<br />Choose a plan</h2>
            <div id='cards' className='flex flex-col lg:flex-row  justify-between gap-8 px-4 md:px-20'>
              {/* plan card 1 */}
              <div className='w-full lg:w-[376px] hover:scale-105 transition-transform duration-300 ease-in-out"' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                <Card className='rounded-3xl bg-gradient-to-b from-neutral-50 to-neutral-100'>
                  <CardHeader>
                    <CardTitle className={`text-center ${buttonState ? "text-orange-600 ease-in-out" : ""}`}>Explorer</CardTitle>
                    <CardTitle className='text-center'>$4,99<span style={{ color: '#9CA3AF' }}>/mo</span></CardTitle>
                  </CardHeader>
                  <div>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Market Trend Analysis</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Market Trend Analysis</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Limited Query Mapping</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Standard Dashboards</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Email Notifications</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Entry-Level Support</p>
                    </CardContent>
                  </div>
                  <CardFooter >

                    <Button
                      className='min-w-full'
                      variant={buttonState ? "temp" : "temp2"}
                    >Get now <ArrowRight /></Button>

                  </CardFooter>
                </Card>
              </div>
              {/* plan card 2 */}
              <div className='w-full lg:w-[376px] hover:scale-105 transition-transform duration-300 ease-in-out"' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                <Card className='rounded-3xl bg-gradient-to-b from-neutral-50 to-neutral-100'>
                  <CardHeader>
                    <div className='flex justify-center gap-4'>
                      <CardTitle className={`text-center ${buttonState2 ? "text-orange-600 ease-in-out" : ""}`}>Innovator</CardTitle>
                      <div className="flex border border-input rounded-md bg-orange-600 bg-opacity-10 px-2">
                        <Dot className='text-orange-600' />
                        <p className="text-orange-600 font-mono">BEST VALUE</p>
                      </div>
                    </div>
                    <CardTitle className='text-center'>$19,99<span style={{ color: '#9CA3AF' }}>/mo</span></CardTitle>
                  </CardHeader>
                  <div>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Everything in Explorer, plus:</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Predictive Analytics</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Advanced Query Mapping</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Customizable Dashboards</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Smart Alert System</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Extended Support</p>
                    </CardContent>
                  </div>
                  <CardFooter >

                    <Button
                      className='min-w-full'
                      variant={buttonState2 ? "temp" : "temp2"}
                    >Get now <ArrowRight /></Button>

                  </CardFooter>
                </Card>
              </div>
              {/* plan card 3 */}
              <div className='w-full  lg:w-[376px] hover:scale-105 transition-transform duration-300 ease-in-out"' onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}>
                <Card className='rounded-3xl bg-gradient-to-b from-neutral-50 to-neutral-100'>
                  <CardHeader>
                    <CardTitle className={`text-center ${buttonState3 ? "text-orange-600 ease-in-out" : ""}`}>Visionary</CardTitle>
                    <CardTitle className='text-center'>$49,99<span style={{ color: '#9CA3AF' }}>/mo</span></CardTitle>
                  </CardHeader>
                  <div>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Everything in Innovator, plus</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Competitor Benchmarking</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Holistic Market Visualization</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Adaptive Strategy Planner</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />24/7 Priority Support</p>
                    </CardContent>
                    <CardContent>
                      <p><ArrowRight className='inline' style={{ color: "#FF4F00" }} />Custom Integrations</p>
                    </CardContent>
                  </div>
                  <CardFooter >

                    <Button
                      className='min-w-full'
                      variant={buttonState3 ? "temp" : "temp2"}
                    >Get now <ArrowRight /></Button>

                  </CardFooter>
                </Card>
              </div>
            </div>



            <div className='flex justify-between md:justify-center gap-2 md:gap-16 mt-[124px] ml-4 px-6 md:px-20' >
              <div className='flex gap-3'>
                <CircleCheck className='text-orange-600' />
                <p className='text-orange-600'>Free trial</p>
              </div>
              <div className='flex gap-3'>
                <CircleCheck className='text-orange-600' />
                <p className='text-orange-600'>Cancel anytime</p>
              </div>
              <div className='flex gap-3'>
                <CircleCheck className='text-orange-600' />
                <p className='text-orange-600'>Support included</p>
              </div>
            </div>
          </div>
        </section>
        {/* accordian */}
        <section id='accordian ' className='mb-[141px]'>
          <div className='border border-input bg-customColor2 h-[1037px] '>
            <div className='flex flex-col items-center '>
              <h2 className='text-center text-2xl md:text-[36px] font-semibold mt-[80px] px-4' style={{color:"#161C2D"}}>Need Help?</h2>
              <p className='mt-[28px] text-center text-[19px] opacity-70 px-4' style={{ color: "#161C2D" }}>Don&apos;t worry, we got you. Here are some answers for<br />your questions.</p>
            </div>
            <div className='flex justify-center mt-[80px] px-4 md:px-20'>
              <Accordion type="single" collapsible className="w-full md:w-[640px] space-y-5">
                <AccordionItem value="item-1">
                  <div className='border border-input bg-white rounded-xl px-6'>
                    <AccordionTrigger><span style={{ color: "#0E0B3D" }}>What is GenAI?</span></AccordionTrigger>
                    <Separator />
                    <AccordionContent style={{ color: "#808080" }}>
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                  </div>

                </AccordionItem>
                <AccordionItem value="item-2">
                  <div className='border border-input bg-white rounded-xl px-6'>
                    <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
                    <Separator />
                    <AccordionContent style={{ color: "#808080" }}>
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                  </div>

                </AccordionItem>
                <AccordionItem value="item-3">
                  <div className='border border-input bg-white rounded-xl px-6'>
                    <AccordionTrigger>Lorem ipsum dolor sit.</AccordionTrigger>
                    <Separator />
                    <AccordionContent style={{ color: "#808080" }}>
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                  </div>

                </AccordionItem>
                <AccordionItem value="item-4">
                  <div className='border border-input bg-white rounded-xl px-6'>
                    <AccordionTrigger>Lorem ipsum dolor sit.</AccordionTrigger>
                    <Separator />
                    <AccordionContent style={{ color: "#808080" }}>
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                  </div>

                </AccordionItem>
                <AccordionItem value="item-5">
                  <div className='border border-input bg-white rounded-xl px-6'>
                    <AccordionTrigger>Lorem, ipsum dolor.</AccordionTrigger>
                    <Separator />
                    <AccordionContent style={{ color: "#808080" }}>
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                  </div>

                </AccordionItem>
                <AccordionItem value="item-6">
                  <div className='border border-input bg-white rounded-xl px-6'>
                    <AccordionTrigger>Lorem, ipsum dolor.</AccordionTrigger>
                    <Separator />
                    <AccordionContent style={{ color: "#808080" }}>
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                  </div>

                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>


        {/* footer */}

        <section id='footer'>
          <div className='flex flex-col items-center mb-[102px]'>
            <h2 className='text-5xl text-center px-4 md:text-start md:text-[56px] font-semibold mb-[32px]'>Detect your next <span className='text-customColorText'>big move</span></h2>
            <p className='text-center px-4  text-[17.9px] mb-[32px]'>Experience the synergy of your favorite tools working seamlessly<br />together, all powered by Horizon&apos;s cutting-edge AI analytics.</p>
            <div className='flex flex-col md:flex-row gap-3'>
              <Input className='w-full md:w-[374px] bg-customColor3' />
              <Button variant={"destructive"}>Subscribe Now</Button>
            </div>
          </div>

          {/* footer end */}
          <div className='h-full md:h-[634px] border border-input bg-customColorFotter'>
            <div className='flex justify-center mt-[72px] px-4 md:px-20'>
              <div className='w-full md:w-[1170px]'>
                <div className='flex items-center md:justify-between md:flex-row gap-5 flex-col mb-[64px]'>
                  <p className='text-2xl leading-normal  md:text-[40px] text-white text-center  md:text-start'>Get your AI apps built with<br /> blazing speed.</p>
                  <Button variant={"destructive"} className='max-w-56 md:w-auto'>Subscribe Now</Button>
                </div>
                <Separator />
                {/* second section */}
                <div className='mt-[64px] flex justify-between'>
                  <div className='w-[300px] leading-8 '>
                    <p className='text-white opacity-70 text-[34px] mb-[32px]'>GenAI</p>
                    <p className='text-white  text-[18px] mb-[32px]'>lorem ipsum dolor sit amet lorem ipsum dolor sit maet lorem ipsum dlor sit amet.</p>
                    <p className='text-white hidden md:block text-[16px]'>All rights reserved.</p>
                  </div>
                  <div className='w-[505px] '>
                    <div className='flex justify-between items-center'>
                      <ul className='text-white leading-10'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Story</li>
                      </ul>
                      <ul className='text-white leading-10'>
                        <li>Company</li>
                        <li>Product</li>
                        <li>Press</li>
                        <li>More</li>
                      </ul>
                      <ul className='text-white leading-10'>
                        <li>Press</li>
                        <li>Careers</li>
                        <li className='text-wrap'>News</li>
                        <li>More</li>
                      </ul>
                    </div>

                  </div>
                  
                </div>

              </div>
            </div>
            <p className='text-white text-center md:hidden'>All rights reserved.</p>
          </div>
          
        </section>

      </main>
    </>
  )
}
