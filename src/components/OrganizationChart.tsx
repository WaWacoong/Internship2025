
const OrganizationChart = () => {
  return (
    <section id="organization" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">แผนผังองค์กร</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="rounded-lg overflow-hidden border border-gray-100">
              <img
                src="/images/img5.jpg"
                alt="Organization Chart"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;