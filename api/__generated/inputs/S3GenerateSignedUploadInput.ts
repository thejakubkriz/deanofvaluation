import type {S33ContentDisposition} from '../enums';
import type {S3Acl} from '../enums';

/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type S3GenerateSignedUploadInput = {
    readonly contentType?: string;
    readonly extension?: string;
    readonly expiration?: number;
    readonly size?: number;
    readonly prefix?: string;
    readonly suffix?: string;
    readonly fileName?: string;
    readonly contentDisposition?: S33ContentDisposition;
    readonly acl?: S3Acl;
}
