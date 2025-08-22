import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Poonam Raghuwanshi"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                I am Poonam Raghuwanshi, a Computer Science undergraduate
                specializing in MERN Stack Development, Frontend Engineering,
                and Backend API Design. Skilled in JavaScript, React.js, Redux
                Toolkit, Tailwind CSS, Node.js, Express.js, and MongoDB, I focus
                on building scalable full-stack applications with strong
                performance and user-friendly design. I also have a solid
                foundation in C, Core Java, and Git/GitHub
                workflows.{" "}
               
              </p>
              <p className="text-white">
                My projects include an AI-Powered Civic Complaint Reporting System, an AI-Driven Image Compression Platform, a Full-Stack Vacation Rental Platform with Razorpay payments, and a URL Shortener backend service. These projects highlight expertise in REST APIs, JWT authentication & authorization, payment integration, and cloud deployment, demonstrating my ability to deliver production-ready solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Beyond development, I contribute as an ACM Student Chapter Treasurer, gaining leadership and collaboration experience. Recognized as an Outstanding Participant in Web Development workshops and a Finalist at Codictive 3.0 Hackathon, I aim to apply my skills to create innovative, efficient, and user-centric applications while growing as a Full-Stack Developer.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Poonam Raghuwanshi
                    </cite>
                    
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
