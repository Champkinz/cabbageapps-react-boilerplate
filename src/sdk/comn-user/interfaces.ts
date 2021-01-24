export interface User {
  id: number;
  version: number;
  tenantId: string;
  userId: string;
  userName: string;
  userRoleId: number;
  userRole: string;
  userTypeId: number;
  userType: string;
  designationId: number;
  designation: string;
  employeeNumber: string;
  email: string;
  userStatus: string;
  profileStatus: string;
  functionalSuperiorName?: any;
  functionalSuperiorId?: any;
  administrativeSupervisorName?: any;
  administrativeSupervisorId?: any;
  createdDate: string;
  createdBy: string;
  modifiedDate?: any;
  modifiedUser?: any;
  inactivatedDate?: any;
  inactivatedUser?: any;
  departmentId: number;
  profilePictureId: number;
  department: string;
}

//keep the interfaces here
