import Navbar from './components/Navbar';
import ActivitySlider from './components/ActivitySlider';
import CompanyInfo from './components/CompanyInfo';
import OrganizationChart from './components/OrganizationChart';
import AssignedTasks from './components/AssignedTasks';
import Team from './components/Team';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="pt-16 flex-grow">
        <ActivitySlider />
        <CompanyInfo />
        <OrganizationChart />
        <Team />
        <AssignedTasks />
      </main>
      <Footer />
    </div>
  );
}

export default App;