export interface ILesson {
  name: string;
  image_url: string;
}

export interface IModule {
  name: string;
  lessons: ILesson[];
}

export interface ICourse {
  id: string;
  name: string;
  description: string;
  image_url: string;
  modules: IModule[];
}
