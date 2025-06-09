import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// --- Layouts ---
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import ProfilesLayout from '@/layouts/ProfileLayout';
import ChatsLayout from '@/layouts/ChatsLayout';
import SettingsLayout from '@/layouts/SettingsLayout';

// --- Lazy loaded Pages ---
const SignupPage = lazy(() => import('@/pages/Signup'));
const SigninPage = lazy(() => import('@/pages/Signin'));
const HomePage = lazy(() => import('@/pages/Home'));
// Chats
const ChatsPage = lazy(() => import('@/pages/chats/Index'));
const ChatPage = lazy(() => import('@/pages/chats/Chat'));
// Profiles
const MyProfilePage = lazy(() => import('@/pages/profiles/MyProfile'));
const ProfilePage = lazy(() => import('@/pages/profiles/Profile'));
// Settings
const GeneralSettingsPage = lazy(() => import('@/pages/settings/GeneralSettings'));
const AccountSettingsPage = lazy(() => import('@/pages/settings/AccountSettings'));

// --- Not Found Page (Optional, but recommended) ---
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {/* --- Auth Layout --- */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="signin" replace />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>

      {/* --- Main Layout --- */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      {/* --- Chats Layout --- */}
      <Route path="/chats" element={<ChatsLayout />}>
        <Route index element={<ChatsPage />} />
        <Route path=":chatId" element={<ChatPage />} />
      </Route>

      {/* --- Profiles Layout --- */}
      <Route path="/profiles" element={<ProfilesLayout />}>
        <Route index element={<Navigate to="my-profile" replace />} />
        <Route path="my-profile" element={<MyProfilePage />} />
        <Route path=":profileId" element={<ProfilePage />} />
      </Route>

      {/* --- Settings Layout --- */}
      <Route path="/settings" element={<SettingsLayout />}>
        <Route index element={<Navigate to="general" replace />} />
        <Route path="general" element={<GeneralSettingsPage />} />
        <Route path="account" element={<AccountSettingsPage />} />
      </Route>

      {/* --- Catch-all NotFound Route --- */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
