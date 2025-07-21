import AdminPanel from '@/components/AdminSide/AdminPanel'
import ProtectedRoute from '@/components/AdminSide/ProtectedRoute'

export const metadata = {
  title: 'Admin Panel - Parmar CNC',
  description: 'Admin control panel for Parmar CNC',
}

export default function AdminPanelPage() {
  return (
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  )
} 