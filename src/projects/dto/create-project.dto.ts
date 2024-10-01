
export class CreateProjectDto {
    name: string;
    description: string;
    budget: number;
    startAt: Date;
    endAt: Date;
    active: boolean;
}
