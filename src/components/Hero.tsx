const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[92vh] px-4 md:px-14">
      <div>
        <p className="font-mono text-lg font-medium text-teal-700 dark:text-green-350 mb-2">
          Hello world, I am
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
          Syed Taqi Haider.
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold py-2 mb-4">
          I turn caffeine into lines of code.
        </h1>
        <p className="max-w-prose">
          I'm a software engineer that enjoys working across the technology
          stack - from low-power embedded devices to scalable full-stack web
          applications running in the cloud. Currently, I'm developing software
          for the next generation of innovative laboratory instruments at{" "}
          <a href="https://cambustion.com">
            <span className="text-teal-700 hover:text-teal-500 dark:text-green-350 dark:hover:text-emerald-500">
              Cambustion
            </span>
          </a>{" "}
          using TypeScript, React, Node.js and Python.
        </p>
      </div>
    </section>
  );
};

export default Hero;
