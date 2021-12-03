import { Route, BrowserRouter as Router , Switch } from 'react-router-dom';
import Charts from './DashBord/DeshHome/charts/Charts';
import CreateUser from './DashBord/DeshHome/createuser/CreateUser';
import MainPage from './DashBord/DeshHome/MainPage';
import SidebarDesh from './DashBord/DeshSidebar/SidebarDesh';
import JustListed from './DashBord/justlisted/JustListed';
import Post from './DashBord/posts/Post';
import ProductList from './DashBord/Product/ProductList';
import FreeProduct from './DashBord/ProductPages/freeProduct/FreeProduct';
import Product from './DashBord/ProductPages/product/Product';
import Topbar from './DashBord/Topbar/Topbar';
import UserPage from './DashBord/user/UserPage';
import AllProduct from './DashBord/ProductPages/Allproduct/AllProduct'
import './style.css'
import Creategroup from './DashBord/Group/creategroup/Creategroup';
import Allgroups from './DashBord/Group/creategroup/Allgroups';
import Categories from './DashBord/ProductPages/categories/Categories';
import Login from './DashBord/LogIn/Login';
import Registation from './DashBord/Registation/Registation';
import NewProduct from './DashBord/newProduct/NewProduct';
import Notification from './DashBord/Notification/Notification';
import TotalGroups from './DashBord/Group/NewGroups/TotalGroups';


function App() {
  return (
    <>

    <Router>
      
      <Switch>
        <div className="login">
        <Route exact path="/login"> <Login/></Route> 
        <Route exact path="/reg"> <Registation/></Route> 
            
             <div className="app">
                <Topbar/>
                   <div className="app_body">

                        <SidebarDesh/> 
                  <Route exact path='/'> <MainPage/> </Route> 
                  <Route exact path="/post"> <Post/></Route> 
                  <Route exact path="/justlisted"> <JustListed/></Route> 
                  <Route exact path="/user/:userId"> <UserPage/></Route> 
                  <Route exact path="/user"> <UserPage/></Route> 
                  <Route exact path="/newuser"> <CreateUser/></Route> 
                  <Route exact path="/product"> <ProductList/></Route> 
                  <Route exact path="/free"> <FreeProduct/></Route> 
                  <Route exact path="/products/:userId"> <Product/></Route> 
                  <Route exact path="/all"> <AllProduct/></Route> 
                  <Route exact path="/groups"> <TotalGroups/></Route> 
              
                  <Route exact path="/create"> <Creategroup/></Route> 
                 
                  <Route exact path="/categoris"> <Categories/></Route> 
                  <Route exact path="/newproduct"> <NewProduct/></Route> 
                  <Route exact path="/noti"> <Notification/></Route> 
                
                    

          
              </div>
        
          </div>
          
          </div>
     
       </Switch>
    </Router>
    
    </>
  );
}

export default App;
