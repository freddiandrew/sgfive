import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserDB } from './users';
import { ActivityDB } from './activity';
import { ProjectDashboardDb } from './dashboard-project';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      'users': UserDB.users,
      'activities': ActivityDB.activity,
      'project': ProjectDashboardDb.widgets
    };
  }
}
