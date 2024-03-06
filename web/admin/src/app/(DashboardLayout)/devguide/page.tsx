'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const DevGuidePage = () => {
  return (
    <PageContainer title="개발 가이드" description="광전IT 스터디 개발 가이드">
      <DashboardCard title="개발 가이드">
        <Typography>이 페이지는 공통 유틸 사용 예시를 보여주기 위한 화면입니다.</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default DevGuidePage;

