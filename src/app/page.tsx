import React from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import ShinyButton from "@/components/ui/shiny-button";
import { MarqueeDemo } from "@/components/ReviewCard";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function Hero() {
  return (
    <>
      <div
        data-testid="page-container"
        className="relative flex flex-col items-center justify-center p-6 py-10 space-y-4 w-screen min-h-screen bg-cover bg-center pt-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <h1 className="relative z-10 text-white text-2xl font-bold text-center max-w-[900px] md:text-4xl">
          Digital Marketing Solution Hub
        </h1>

        <div className="relative z-10 text-white text-center max-w-[1200px] space-y-2">
          <p className="font-light">
            If you are looking for an agency to help you grow your business you
            have reached to a right place. One place to scale your all needs.
          </p>
        </div>

        <div className="relative z-10">
          <ShinyButton className="bg-white">Contact Us</ShinyButton>
        </div>
      </div>
      <div>
        <div className="relative flex gap-6 h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
          <h2 className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white mt-4 sm:mt-0">
            DM solution Hub: Your Reliable Partner
          </h2>
          <p className="text-center mx-auto max-w-[900px] opacity-60">
            At DM Solution Hub, we are dedicated to offering dependable and
            efficient VPS and mail hosting solutions tailored to meet your
            business demands. With a strong emphasis on security, performance,
            and 24/7 support, we ensure your digital infrastructure is stable,
            secure, and ready to scale. Whether you're in need of
            high-performance virtual private servers or robust email hosting
            services, our expert team is here to deliver reliable solutions that
            keep your business operating seamlessly. Experience world-class
            hosting with DG Hosting Experts, designed to provide peace of mind
            and support your business growth.
          </p>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
      </div>
      <div>
        <div className="relative flex gap-4 flex-col items-center justify-center w-full bg-[#E7F6FF] p-6">
          <h2 className="text-5xl font-medium tracking-tighter text-black dark:text-white">
            Hire Us For
          </h2>
        </div>
      </div>

      <div className="flex flex-col bg-[#E7F6FF] md:flex-row justify-center gap-6 p-4 pb-10">
        <div className="relative p-6 flex flex-col items-center justify-center h-[500px] max-w-[100%] md:max-w-[30%] rounded-lg border bg-background md:shadow-xl">
          <h2 className="text-2xl font-bold text-start text-gray-800 dark:text-gray-200 md:text-4xl">
            Web Design & Development
          </h2>
          <p className="text-start text-gray-600 dark:text-gray-300 mt-4 opacity-70">
            For any business to grow, main thing starts with its website as it
            is a first step towards digital world. We have a combine experience
            of 30+ years which include team of professionals of 20 people
            dedicated only for web design & development.
          </p>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>

        <div className="relative p-6 flex flex-col items-center justify-center h-[500px] max-w-[100%] md:max-w-[30%] rounded-lg border bg-background md:shadow-xl">
          <h2 className="text-2xl font-bold text-start text-gray-800 dark:text-gray-200 md:text-4xl">
            VPS(Virtual Private Server)
          </h2>
          <p className="text-start text-gray-600 dark:text-gray-300 mt-4 opacity-70">
            Make your website or application faster and also more reliable with
            our speedy and reliable data centers. You can choose from our
            virtual private server near your targeted customers for fast,
            reliable and safe website access. Our service reaches 20 global
            locations so you can rely on us and we are using the latest
            technology to provide fast, safe and secure hosting.
          </p>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
        <div className="relative p-6 flex flex-col items-center justify-center h-[500px] max-w-[100%] md:max-w-[30%] rounded-lg border bg-background md:shadow-xl">
          <h2 className="text-2xl font-bold text-start text-gray-800 dark:text-gray-200 md:text-4xl">
            Digital Marketing
          </h2>
          <p className="text-start text-gray-600 dark:text-gray-300 mt-4 opacity-70">
            Digital marketing is a tool which is very important for any business
            to grow in today’s world. We offer a varierty of digital marketing
            services for any size of businesses to scale up their product or
            services online.
          </p>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      </div>
      <div>
        <div className="relative flex gap-6 h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
          <h2 className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Custom Email Address
          </h2>
          <p className="text-center mx-auto max-w-[900px] opacity-60">
            Email is the most essential and frequently used business tool which
            can never be compromised for its availability. DM Solution Hub offer
            a reliable and affordable Premium business mail solutions as per
            your precise needs.
          </p>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
      </div>
      <div
        data-testid="page-container"
        className="relative flex flex-col items-center  text-white justify-center p-6 py-12 space-y-4 w-screen min-h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h2 className="relative z-10 text-3xl font-bold text-center md:text-5xl">
          Why Choose Us
        </h2>
        <p className="relative z-10 text-lg text-center text-gray-400 mt-4">
          What Sets Us Apart
        </p>

        <div className="relative z-10 grid gap-8 px-6 mt-10 sm:grid-cols-1 md:grid-cols-3 max-w-6xl">
          <div className="p-8 bg-gray-800 rounded-lg text-center">
            <div className="flex justify-center">
              <div className="bg-blue-500 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-white align-center justify-center"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 17h-2v-6H8l4-8v6h2l-4 8z" />
                </svg>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold">Perfection Anytime</h3>
            <p className="mt-4 text-gray-400">
              At DM Solution Hub, we pride ourselves on delivering perfection
              anytime. Our expert team ensures flawless hosting solutions
              tailored to your specific needs.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-lg text-center">
            <div className="flex justify-center">
              <div className="bg-blue-500 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 8V6.839a3 3 0 0 0-1.823-2.764l-5.368-2.123a3 3 0 0 0-2.618 0L4.823 4.075A3 3 0 0 0 3 6.839V8L2 11v5a2 2 0 0 0 2 2h3v-5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5h3a2 2 0 0 0 2-2v-5l-1-3zM5 5.361 9.516 3.52a1 1 0 0 1 .87 0l4.6 1.817-7.616 2.647L5 5.361z" />
                </svg>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold">24/7 Communication</h3>
            <p className="mt-4 text-gray-400">
              At DM Solution, we offer 24/7 support to help you with technical
              queries or troubleshooting around the clock.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-lg text-center">
            <div className="flex justify-center">
              <div className="bg-blue-500 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3c-4.963 0-9 4.037-9 9 0 3.986 2.977 7.322 6.812 8.729l-.022.271c0 .393.381.707.825.707h2.548c.444 0 .825-.314.825-.707l-.021-.271C18.023 19.322 21 15.986 21 12c0-4.963-4.037-9-9-9zm.5 15h-1v-1h1v1zm1.07-5.663l-.325.215v3.448h-1.49v-4.213l1.665-1.11c.554-.369.67-.767.67-1.122 0-.551-.449-1-1-1-.551 0-1 .449-1 1h-1c0-1.104.896-2 2-2s2 .896 2 2c0 .956-.6 1.522-1.52 2.003z" />
                </svg>
              </div>
              1
            </div>
            <h3 className="mt-4 text-xl font-bold">Advanced Technology</h3>
            <p className="mt-4 text-gray-400">
              At DM Solution Hub, we leverage advanced technology to deliver
              superior hosting solutions, ensuring optimal performance and
              scalability.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="relative flex gap-6 h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
          <h2 className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-center mx-auto max-w-[900px] opacity-60">
            Hear from our satisfied customers who have experienced the
            exceptional service and support provided by DG Hosting.
          </p>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
        <MarqueeDemo />
      </div>
    </>
  );
}
