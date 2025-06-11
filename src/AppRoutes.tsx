import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// Loader
import Loader from '@/components/layout/Loader';

// --- Layouts ---
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import ChatsLayout from '@/layouts/ChatsLayout';
import ProfilesLayout from '@/layouts/ProfileLayout';
import SettingsLayout from '@/layouts/SettingsLayout';

// --- Lazy loaded pages ---
const HomePage = lazy(() => import('@/pages/Home'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

// Auth
const SigninPage = lazy(() => import('@/pages/auth/Signin'));
const SignupPage = lazy(() => import('@/pages/auth/Signup'));
const ForgotPasswordPage = lazy(() => import('@/pages/auth/ForgotPassword'));
const ResetPasswordPage = lazy(() => import('@/pages/auth/ResetPassword'));
const VerifyEmailPage = lazy(() => import('@/pages/auth/VerifyEmail'));

// Chats
const ChatsPage = lazy(() => import('@/pages/chats'));
const ChatPage = lazy(() => import('@/pages/chats/Chat'));
const NewChatPage = lazy(() => import('@/pages/chats/NewChat'));
const ChatSettingsPage = lazy(() => import('@/pages/chats/ChatSettings'));

// Profiles
const MyProfilePage = lazy(() => import('@/pages/profiles/MyProfile'));
const ProfilePage = lazy(() => import('@/pages/profiles/Profile'));

// Settings
const GeneralSettingsPage = lazy(() => import('@/pages/settings/GeneralSettings'));
const AccountSettingsPage = lazy(() => import('@/pages/settings/AccountSettings'));
const PrivacySettingsPage = lazy(() => import('@/pages/settings/PrivacySettings'));
const NotificationSettingsPage = lazy(() => import('@/pages/settings/NotificationSettings'));

// Public
const AboutPage = lazy(() => import('@/pages/public/About'));
const ContactPage = lazy(() => import('@/pages/public/Contact'));
const TermsPage = lazy(() => import('@/pages/public/Terms'));

function AppRoutes() {
  const routes = useRoutes([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { index: true, element: <Navigate to="signin" replace /> },
        { path: 'signin', element: <SigninPage /> },
        { path: 'signup', element: <SignupPage /> },
        { path: 'forgot-password', element: <ForgotPasswordPage /> },
        { path: 'reset-password/:token', element: <ResetPasswordPage /> },
        { path: 'verify-email/:token', element: <VerifyEmailPage /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'terms', element: <TermsPage /> },
      ],
    },
    {
      path: '/chats',
      element: <ChatsLayout />,
      children: [
        { index: true, element: <ChatsPage /> },
        { path: 'new', element: <NewChatPage /> },
        { path: ':chatId', element: <ChatPage /> },
        { path: ':chatId/settings', element: <ChatSettingsPage /> },
      ],
    },
    {
      path: '/profiles',
      element: <ProfilesLayout />,
      children: [
        { index: true, element: <Navigate to="my-profile" replace /> },
        { path: 'my-profile', element: <MyProfilePage /> },
        { path: ':profileId', element: <ProfilePage /> },
      ],
    },
    {
      path: '/settings',
      element: <SettingsLayout />,
      children: [
        { index: true, element: <Navigate to="general" replace /> },
        { path: 'general', element: <GeneralSettingsPage /> },
        { path: 'account', element: <AccountSettingsPage /> },
        { path: 'privacy', element: <PrivacySettingsPage /> },
        { path: 'notifications', element: <NotificationSettingsPage /> },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <Suspense fallback={<Loader />}>{routes}</Suspense>;
}

export default AppRoutes;
