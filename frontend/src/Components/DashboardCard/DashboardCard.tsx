import {Link} from "react-router-dom";

type DashboardCardProps = {
  className: string;
  icon: JSX.Element;
  name: string;
  link:string;
};
const DashboardCard = ({ className, icon, name, link}: DashboardCardProps) => {
  return (
    <Link to={link} className={className}>
    <div className="wrapper">
      {icon}
      <h2>{name}</h2>
    </div>
    </Link>
  );
};

export default DashboardCard;
