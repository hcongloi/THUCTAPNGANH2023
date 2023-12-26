import React from 'react';

const TaskCard: React.FC = () => {
  const testData = [
    {
      title: 'Task 1',
      dueDate: 'March 30, 2023',
      completedTaskCount: 15,
      totalTaskCount: 20,
    },
    {
      title: 'Task 2',
      dueDate: 'April 15, 2023',
      completedTaskCount: 10,
      totalTaskCount: 15,
    },
    {
      title: 'Task 3',
      dueDate: 'May 1, 2023',
      completedTaskCount: 5,
      totalTaskCount: 10,
    },
  ];

  return (
    <div>
      {testData.map((task, index) => (
        <div key={index} className="flex w-[446px] flex-col gap-[44px] rounded-[8px] bg-gray-300 p-[40px]">
          <div className="flex items-center justify-between self-stretch">
            <div className="flex w-[313.5px] flex-col items-start gap-[12px]">
              <h3 className="text-gray-950 text-20 font-roboto leading-24 font-normal">{task.title}</h3>
              <p>Due date: {task.dueDate}</p>
            </div>
            <div className="h-[64] w-[64px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="#030712" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.8906 12.3359C31.5624 11.888 32.4376 11.888 33.1094 12.3359L51.1094 24.3359C51.6658 24.7068 52 25.3313 52 26V38C52 38.6687 51.6658 39.2932 51.1094 39.6641L33.1094 51.6641C32.4376 52.112 31.5624 52.112 30.8906 51.6641L12.8906 39.6641C12.3342 39.2932 12 38.6687 12 38V26C12 25.3313 12.3342 24.7068 12.8906 24.3359L30.8906 12.3359ZM16 29.737L19.3944 32L16 34.263V29.737ZM17.6056 38L30 46.263V39.0704L23 34.4037L17.6056 38ZM26.6056 32L32 35.5963L37.3944 32L32 28.4037L26.6056 32ZM34 24.9296L41 29.5963L46.3944 26L34 17.737V24.9296ZM30 17.737V24.9296L23 29.5963L17.6056 26L30 17.737ZM48 29.737L44.6056 32L48 34.263V29.737ZM46.3944 38L41 34.4037L34 39.0704V46.263L46.3944 38Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
          </div>
          <div className="flex-start flex flex-col gap-[24px] self-stretch">
            <div className="flex items-center justify-between self-stretch">
              <div className="mb-6">
                <div className="relative flex">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className={`absolute left-[${16 * index}px] z-${20 * (index + 1)} h-[32px] w-[32px] shrink-0 rounded-full bg-${
                        index === 4 ? 'white' : index === 3 ? 'orange-200' : index === 2 ? 'slate-700' : index === 1 ? 'neutral-600' : 'white'
                      }`}
                    ></div>
                  ))}
                  <div className="absolute left-[80px] z-[60] flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white">
                    <p className="absolute">+4</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#22C55E" />
                  </svg>
                </div>
                <p>{task.completedTaskCount} Completed</p>
              </div>
            </div>
            <div className="h-[4px] w-[366px] rounded-md bg-green-400"></div>
            <div className="flex items-center justify-between self-stretch">
              <div className="">
                <p>{task.completedTaskCount}/{task.totalTaskCount} Total Tasks</p>
              </div>
              <div className="">
                <p>{((task.completedTaskCount / task.totalTaskCount) * 100).toFixed(0)}%</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
