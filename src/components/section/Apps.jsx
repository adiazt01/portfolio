export const Apps = () => {
  return (
    <section
      className="flex h-auto lg:items-start justify-start flex-col items-center"
      id="Apps"
    >
      <h2 className="text-gray-300 text-4xl lg:text-6xl text-left underline underline-offset-8 decoration-green-400">
        Apps
      </h2>
      {/* Projects */}
      <div className="grid w-full mt-28 mb-44 grid-cols-1 gap-8">
        <div className="flex flex-col items-center">
          <img className="hidden lg:flex" src="mockup/task_flow.png" />
          <img
            className="lg:hidden block object-cover -mt-32 -mb-32 object-top shadow w-full h-[500px]"
            src="mockup/task_flow_sm.png"
          />
          <a
            href="https://task-flow-gc6g.onrender.com/"
            target="_blank"
            className="inline-flex lg:mt-0 mt-20 cursor-pointer items-center px-4 py-2 text-sm font-medium border-2 text-gray-300 border-green-500 hover:-translate-y-3 transition"
            rel="noreferrer"
          >
            View Task Flow app{" "}
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
