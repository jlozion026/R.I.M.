import { IDashboardData } from './models'

export const getCountData = (reportType: string, data: IDashboardData): number | undefined => {

  if (reportType in data) {
    const count = data[reportType as keyof typeof data];
    if (count != null) {
      return count?.aggregateReport._count?.report_type;
    }
  }
  return 0;
}
