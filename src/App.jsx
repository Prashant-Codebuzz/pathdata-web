import { Route, Routes } from 'react-router-dom'
import './css/App.css';
import './css/Responsive.css';

import AuthLayout from './Components/Auth-Layout/AuthLayout';
import { DefaultLayout, HomeLayout } from './Components/Default-Layout/DefaultLayout';
import Dashboard from './Pages/Dashboard/Dashboard'
import DataCatalog from './Pages/Data-Catalog/DataCatalog';
import Database from './Pages/Database/Database';
import TableList from './Pages/TableList/TableList';
import TableDetails from './Pages/Table-Details/TableDetails';
import UserManagement from './Pages/User-Management/UserManagement';
import AddMember from './Pages/User-Management/AddMember';
import CloudResource from './Pages/CloudResource/CloudResource';
import VPC from './Pages/CloudResource/VPC/VPC';
import ResourcesIAM from './Pages/CloudResource/ResourcesIAM/ResourcesIAM';
import CredentialConfigure from './Pages/CloudResource/CredentialConfigure/CredentialConfigure';
import AddVPC from './Pages/CloudResource/VPC/AddVPC';
import AddResourcesIAM from './Pages/CloudResource/ResourcesIAM/AddResourcesIAM';
import AddCredentialConfigure from './Pages/CloudResource/CredentialConfigure/AddCredentialConfigure';

import SigUp from './Pages/SignUp/SignUp';
import SigIn from './Pages/SignIn/SignIn';
import CreateProfile from './Pages/Create-Profile/CreateProfile';

import './css/WebPage.css';
import WebLayout from './Components/WebPage-Layout/WebLayout';
import Home from './Pages/Home/Home';
import EditResourcesIAM from './Pages/CloudResource/ResourcesIAM/EditResourcesIAM';
import EditVPC from './Pages/CloudResource/VPC/EditVPC';
import EditCredentialConfigure from './Pages/CloudResource/CredentialConfigure/EditCredentialConfigure';
import Contactus from './Pages/Contactus/Contactus';
import CreateDataSource from './Pages/Data-Catalog/CreateDataSource';
import Additional from './Pages/Data-Catalog/Additional';
import Credential from './Pages/Data-Catalog/Credential';
import WebHome from './Pages/Website/Home/Home';
import Cluster from './Components/Cluster/Cluster';
import AddCluster from './Components/Cluster/AddCluster';
import Subscription from './Pages/Subscription/Subscription';
import Family from './Pages/Family/Family';
import AddFamily from './Pages/Family/AddFamily';
import Organization from './Pages/Organization/Organization';
import AddOrganization from './Pages/Organization/AddOrganization';
import OrganizationDash from './Pages/Organization/OrganizationDash';
import Home2 from './Pages/Home/NewHome';
import { NewDefaultLayout } from './Components/Default-Layout/NewDefaultLayout';
import NewHome from './Pages/Home/NewHome';
import Billing from './Pages/Billing/Billing';
import SubscriptionList from './Pages/Subscription/SubscriptionList';
import EditSubscription from './Pages/Subscription/EditSubscription';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Setting from './Pages/Setting/Setting';
import EditOrganization from './Pages/Organization/EditOrganization';
import EditFamily from './Pages/Family/EditFamily';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Blog from './Pages/Website/Blog/Blog';
import BlogDetail from './Pages/Website/Blog/BlogDetail';
import ClusterDetails from './Components/Cluster/ClusterDetails';
import Role from './Pages/Role/Role';
import EditProfile from './Pages/Edit-Profile/EditProfile';
import QueryHistory from './Pages/QueryHistory/QueryHistory';
import QueryExecution from './Pages/QueryExecution/QueryExecution';
import QueryRunner from './Pages/QueryRunner/QueryRunner';
import PendingInvites from './Pages/PendingInvites/PendingInvites';
import AIChat from './Pages/AI-Chat/AIChat';

import LandingLayout from './Components/Landing-page/LandingLayout';
import LandingHome from './Pages/Landing/Home/Home';
import Waypoint from './Pages/Landing/Waypoint/Waypoint';
import Pathiq from './Pages/Landing/Pathiq/Pathiq';
import MeetTeam from './Pages/Landing/Meet-Team/MeetTeam';
import JoinTeam from './Pages/Landing/Join-Team/JoinTeam';
import Contact from './Pages/Landing/Contact-Us/ContactUs';

import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {

    // console.log(new Date().toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).replace(',', ''));

    console.log("29-07-2025");


    return (
        <>

            <ScrollToTop />

            <Routes>
                {/* --------------- Landing --------------- */}
                <Route element={<LandingLayout />}>
                    <Route path='/' element={<LandingHome />} />
                    <Route path='/waypoint' element={<Waypoint />} />
                    <Route path='/pathiq' element={<Pathiq />} />
                    <Route path='/meet-team' element={<MeetTeam />} />
                    <Route path='/join-team' element={<JoinTeam />} />
                    <Route path='/contact-us' element={<Contact />} />
                </Route>




                {/* --------------- Web-Site --------------- */}
                <Route element={<WebLayout />}>
                    {/* Home */}
                    <Route path='/explore-pathdata' element={<WebHome />} />
                    {/* Blog */}
                    <Route path='/blog' element={<Blog />} />
                    {/* Blog-Details */}
                    <Route path='/blog/what-is-data-management' element={<BlogDetail />} />
                </Route>

                <Route path='/privacy-policy' element={<PrivacyPolicy />} />




                {/* --------------- Admin-Site --------------- */}
                <Route element={<AuthLayout />}>
                    {/* SigIn */}
                    <Route path='/sign-in' element={<SigIn />} />
                    {/* SigUp */}
                    <Route path='/sign-up' element={<SigUp />} />

                    {/* Create-Profile */}
                    <Route path='/create-profile' element={<CreateProfile />} />

                    {/* Subscription */}
                    <Route path='/subscription' element={<Subscription />} />

                    {/* Billing */}
                    <Route path='/billing' element={<Billing />} />
                </Route>

                <Route element={<DefaultLayout />}>
                    <Route path='/dashboard' element={<Dashboard />} />

                    <Route path={`/home`} element={<NewHome />} />
                    <Route path={`/home2`} element={<Home />} />

                    <Route path={`/invitation`} element={<PendingInvites />} />

                    <Route path='/family' element={<Family />} />
                    <Route path='/add-family' element={<AddFamily />} />
                    <Route path='/edit-family' element={<EditFamily />} />

                    <Route path='/organization' element={<Organization />} />
                    <Route path='/organization-dash/:id' element={<OrganizationDash />} />
                    <Route path='/add-organization' element={<AddOrganization />} />
                    <Route path='/edit-organization' element={<EditOrganization />} />

                    {/* <Route path='/cloud-resource' element={<CloudResource />} /> */}
                    <Route path='/vpc' element={<VPC />} />
                    <Route path='/add-vpc' element={<AddVPC />} />
                    <Route path='/edit-vpc' element={<EditVPC />} />

                    <Route path='/resourcesIAM' element={<ResourcesIAM />} />
                    <Route path='/add-resourcesIAM' element={<AddResourcesIAM />} />
                    <Route path='/edit-resourcesIAM' element={<EditResourcesIAM />} />

                    <Route path='/credential-configure' element={<CredentialConfigure />} />
                    <Route path='/add-credential-configure' element={<AddCredentialConfigure />} />
                    <Route path='/edit-credential-configure' element={<EditCredentialConfigure />} />

                    <Route path='/data-catalog' element={<DataCatalog />} />
                    <Route path='/create-data-source' element={<CreateDataSource />} />
                    <Route path='/additional' element={<Additional />} />
                    <Route path='/credential' element={<Credential />} />

                    <Route path='/database' element={<Database />} />
                    <Route path='/table-list' element={<TableList />} />
                    <Route path='/table-details' element={<TableDetails />} />

                    <Route path='/query-history' element={<QueryHistory />} />
                    <Route path='/query-execution' element={<QueryExecution />} />
                    <Route path='/query-runner' element={<QueryRunner />} />

                    <Route path='/user-management' element={<UserManagement />} />
                    <Route path='/add-member' element={<AddMember />} />

                    <Route path='/role' element={<Role />} />

                    <Route path='/cluster' element={<Cluster />} />
                    <Route path='/add-cluster' element={<AddCluster />} />
                    <Route path='/cluster-details/:id' element={<ClusterDetails />} />

                    <Route path='/contact-us' element={<Contactus />} />

                    <Route path='/setting' element={<Setting />} />
                    <Route path='/edit-profile' element={<EditProfile />} />

                    <Route path='/subscription-list' element={<SubscriptionList />} />
                    <Route path='/subscription-upgrade' element={<EditSubscription />} />

                    <Route path='/ai-chat' element={<AIChat />} />

                </Route>
            </Routes>

        </>
    )
}

export default App;
