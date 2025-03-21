import { DashCarousel } from "../components/dash-carousel";

const footerData = [
  { title: "Community Members", stats: "36K" },
  { title: "Learning Hours", stats: "2.5M" },
  { title: "Courses Available", stats: "120+" },
  { title: "Success Rate", stats: "92%" },
];

const Dashboard = () => {
  return (
    <div>
      <DashCarousel />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {footerData.map((data, index) => (
          <div key={index} className="text-center border rounded-lg p-2 py-4">
            <h4 className="text-xl font-bold mb-1.5">{data.stats}</h4>
            <p className="text-xs text-gray-700">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
