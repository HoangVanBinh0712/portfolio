import { Outlet } from 'react-router-dom';
import NavBar from './navbar';

const Layout = () => (
  <>
    {' '}
    <div className="flex flex-col items-center gap-y-36 font-inter">
      <NavBar />
      <div className="flex w-11/12 flex-col items-center gap-y-36 font-inter md:w-9/12">
        <Outlet />
      </div>
    </div>
    <div className="flex items-center my-8">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-2 text-gray-500">The End</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  </>
);
export default Layout;
