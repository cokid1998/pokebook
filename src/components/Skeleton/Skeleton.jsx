const tmp = ["", "", "", "", "", "", "", "", ""];

function Skeleton() {
  return (
    <main className="flex-1 w-full bg-gray-50 dark:bg-gray-900 px-16 py-32 h-content-height">
      <div className="max-w-7xl mx-auto">
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-24 mb-24">
          {tmp.map((_, idx) => {
            return (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer h-275 animate-pulse"
              >
                <div className="p-16 flex flex-col items-center">
                  <div className="w-96 h-96 bg-slate-200 rounded-full mb-16" />
                  <div className="w-60 h-20 rounded-lg bg-slate-200 mb-10" />
                  <div className="w-100 h-24 rounded-lg bg-slate-200 mb-8" />
                  <div className="w-100 h-62 bg-slate-200 rounded-lg" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Skeleton;
