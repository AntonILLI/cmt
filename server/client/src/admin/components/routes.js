import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import TableList from "../views/TableList/TableList.js";
// core components/views for Admin layout
import DashboardPage from "../views/Dashboard/Dashboard.js";
import UserProfile from "../views/UserProfile/UserProfile.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }
];

export default dashboardRoutes;