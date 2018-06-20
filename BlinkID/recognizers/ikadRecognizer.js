import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult, 
    EudlCountry, 
    DocumentFaceDetectorType,
    ImageExtensionFactors,
} from '../types'

/**
 * Result object for IkadRecognizer.
 */
export class IkadRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * personal address of the Malaysian iKad owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * the date of birth of Malaysian iKad owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * employer of the Malaysian iKad owner. 
         */
        this.employer = nativeResult.employer;
        
        /** 
         * the expiry date of the Malaysian iKad 
         */
        this.expiryDate = nativeResult.expiryDate != null ? new Date(nativeResult.expiryDate) : null;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * faculty address of the Malaysian iKad owner. 
         */
        this.facultyAddress = nativeResult.facultyAddress;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the name of the Malaysian iKad owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * the nationality of the Malaysian iKad owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * the passport number of Malaysian iKad. 
         */
        this.passportNumber = nativeResult.passportNumber;
        
        /** 
         * the sector of Malaysian iKad. 
         */
        this.sector = nativeResult.sector;
        
        /** 
         * sex of the Malaysian iKad owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 *  Recognizer for reading Malaysian iKad.
 * 
 */
export class IkadRecognizer extends Recognizer {
    constructor() {
        super('IkadRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if address is being extracted 
         */
        this.extractAddress = true;
        
        /** 
         * true if employer is being extracted 
         */
        this.extractEmployer = true;
        
        /** 
         * true if expiry date is being extracted 
         */
        this.extractExpiryDate = true;
        
        /** 
         * true if faculty address is being extracted 
         */
        this.extractFacultyAddress = true;
        
        /** 
         * true if nationality is being extracted 
         */
        this.extractNationality = true;
        
        /** 
         * true if passport number is being extracted 
         */
        this.extractPassportNumber = true;
        
        /** 
         * true if sector is being extracted 
         */
        this.extractSector = true;
        
        /** 
         * true if sex is being extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new IkadRecognizerResult(nativeResult); }
    }
}