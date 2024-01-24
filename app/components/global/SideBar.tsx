import Icon, { Icons } from '@element/Icon/Icon';
// import Logo from './logo';

export default function SideBar() {
  return (
    <>
      <div className="md:flex md:w-16 md:flex-col md:fixed md:inset-y-0">
        <div className="flex justify-between flex-col sm:flex-row md:flex-col md:flex-grow md:pt-5 bg-blue-700 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 mx-auto p-2 ">
            <Icon icon={Icons.XEROCODE} alt={'XeroCode'} />
          </div>
          <div className="md:mt-5 flex-1 flex flex-col items-center sm:flex-row md:flex-col justify-end">
            <nav className="flex md:flex-1 flex-col sm:flex-row md:flex-col items-center md:space-y-1"></nav>
          </div>
        </div>
      </div>
    </>
  );
}
