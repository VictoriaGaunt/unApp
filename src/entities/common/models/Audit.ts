/**
 * Модель аудита изменений.
 */
export class Audit {
    createdBy: string;
    createdAt: Date;
    modifiedBy?: string;
    modifiedAt?: Date;

    constructor(createdBy: string) {
        this.createdBy = createdBy;
        this.createdAt = new Date();
    }
}