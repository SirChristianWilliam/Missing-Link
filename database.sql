CREATE TABLE "questions" (
	"id" SERIAL PRIMARY KEY,
	"question" VARCHAR(255) UNIQUE,
	"placeholder" VARCHAR(255)
);
DROP TABLE "questions";
-- Make sure, for the user's answer, to use toLowerCase()/toUpperCase() so the answer is the same for everyone
INSERT INTO "questions" ("question","placeholder")
VALUES 
	('Hair color?', 'black/brown/red/white/blonde/etc'),
	('Eye color?', 'black/hazel/brown/red/blue/green/etc'),
	('Height', '5''9'),
	('Weight',  '165lbs'),
	('Race',  'caucasian/white/black/african american/asian/hawaiian/etc.'),
	('Gender',  'male/female/other'),
	('Age',  '55'),
	('How many dogs do you own?','0'),
	('How many cats do you own?','18'),
	('What allergies do you have?','4'),
	('Shoe size',  '10.5'),
	('Favorite color',  'blue/red/green/blue/white/black/etc.'),
	('State you grew up in',  'MN/CA/CO/etc.'),
	('City you grew up in',  'Pine City'), 
	('What age did you first experience trauama?',  '6'),
	('Have you ever been in love?',  'no/yes'),
	('How many children do you have?',  '0'),
	('Do you drink soda regularly?',  'no/yes'),
	('Do you eat fast food regularly?',  'no/yes'),
	('How many days per week do you exercise?',  '7'),
	('How many years older is your father than you?', '25'),
	('How many years older is your mother than you?', '26'),
	('How many siblings do you have?',  '2'),
	('Do you have more brothers or sisters?',  'brothers/sisters/none'),
	('Do you consider yourself healthy?',  'no/yes'),
	('How many years has it been since you have went on vacation?','3'),
	('Are you an introvert, extrovert, or somehwere inbetwen?','introvert/extrovert/inbetween'),
	('Are you able to focus easily on the task at hand?',  'no/yes/sometimes'),
	('Would you call your childhood great, ok, or awful?','great/ok/awful'),
	('Do social situations make you anxious?',  'no/yes/rarely/often'),
	('Have you ever broken a limb?',  'no/yes'),
	('How many concussions have you had?',  '5'),
	('Does it usually take you longer than an hour to fall asleep?',  'no/yes'),
	('During your life, does it usually take you longer than an hour to fall asleep?','no/yes'),
	('Would you consider your vision to be good,bad,or ok?',  'good/bad/ok'),
	('Would you consider your sense of smell to be good or bad?',  'good/bad'),
	('Do you often experience brain fogginess?',  'no/yes'),
	('Does your family have a history of mental illness?',  'no/yes'),
	('Does your family have a history of addiction?',  'no/yes'),
	('Does your family have a history of heart issues?',  'no/yes'),
	('Does your family have a history of diabetes?',  'no/yes'),
	('Do any of your immediate family members have autism, down syndrome, or a serious mental illness?','no/yes'),
	('Do any of your immediate family members struggle with obesity?',  'no/yes'),
	('Do any of your immediate family members struggle with bulimia?',  'no/yes'),
	('Do you suffer from obesity/unhealthy excess weight?',  'no/yes'),
	('Do you suffer from bulimia or dietary/eating problems?', 'no/yes'),
	('Do you often feel as if you have something mentally wrong with you, but you can not tell what it is?',  'no/yes'),
	('Do you often feel as if you have something physically wrong with you, but you can not tell what it is?',  'no/yes'),
	('Have you ever had a serious infection?',  'no/yes'),
	('Do you often dream?',  'no/yes'),
	('Do you often have nightmares?',  'no/yes'),
	('How many days per week do you drink alcohol?',  '5'),
	('How many days per week do you smoke cigarrettes/vape?','7'),
	('How many days per week do you smoke marijuana?',  '4'),
	('How many days per week do you drink caffeine?',  '7'),
	('Does your weight often fluctuate greatly?',  'no/yes'),
	('What is your dominant hand?',  'left/right/ambidextrous'),
	('Have you ever taken any psychadellic substances, aside from marijuanna?',  'no/yes'),
	('How many times have you taken psychadellic substances in your life?','48'),
	('What age did you first ingest a psychadellic substance?','2'),
	('Do you often feel an unhealthy amount of stress?',  'no/yes'),
	('How many years(if any) have you felt an unhealthy amount of stress in your life?',  '22'),
	('Did you grow up lower, middle, or upper class?',  'lower/middle/upper'),
	('Did you feel loved by your parent(s)?',  'no/yes'),
	('Have you ever served in the armed forces?','no/yes'),
	('Have you ever seen someone killed?',  'no/yes'),
	('Have you ever been in a coma?',  'no/yes'),
	('Have you ever had surgery?',  'no/yes'),
	('Have you ever had brain surgery?',  'no/yes'),
	('Have you ever had heart surgery?',  'no/yes'),
	('Do you sleep on your side, back, or stomach?',  'side/back/stomach'),
	('How many hours of sleep do get per night on average?',  '4'),
	('Have you ever been in a major car accident?',  'no/yes'),
	('Would you consider yourself an impulsive person?',  'no/yes'),
	('Would you consider yourself an ambitious person?',  'no/yes'),
	('Would you consider yourself a lazy person?',  'no/yes'),
	('Are you empathetic, not empathetic, or neutral?',  'empathetic/not empathetic/neutral'),
	('Are you an optimist, pessimist, or realist?',  'optimist/pessimist/realist'),
	('Do you chew your fingernails?',  'no/yes'),
	('Do you have trouble making eye contact?',  'no/yes'),
	('Do you often have chronically dry eyes?',  'no/yes'),
	('Have you ever been shot or stabbed?',  'no/yes'), 
	('As a child, did you become sick or ill more often than your peers?',  'no/yes'),
	('What is your occupation?',  'construction/nurse/waiter/fastfood/biologist/truck driver/etc.'),
	('How many hours do you work per week on average?',  '10/20/30/40/etc'),
	('How many years, if any, have you worked at your current occupation?',  '4'),
	('What is the most amount of years you have stayed at a single job?','15'),
	('How many sexual partners have you had?',  '7'),
	('Do you currently have what you feel is a healthy living situation?',  'no/yes'),
	('As a kid, did you feel you had a healthy living situation?',  'no/yes'),
	('In the past or now, are you frequented by unexplained hives or rashes?',  'no/yes'),
	('How many days per week do you have headaches/migraines?',  '2'),
	('Do you often have a stuffy or congested nose?',  'no/yes'),
	('What age do you have your earliest childhood memory of?',  '67'),
	('What state do you currently live in','MN/CA/CO/etc.'),
	('What city do you currently live in','Ham Lake'),
	('What hospital were you born in?',  'St Judes,MN/not sure'),
	('Did you drink mostly well water or mostly city water growing up?',  'well/city'),
	('Have you ever been sexually abused?',  'no/yes'),
	('Do you consider yourself happy?',  'no/yes'),
	('What was your highschool GPA?',  '3.25'),
	('Did you go to college?',  'no/yes'),
	('What was your college GPA?',  '3.25'),
	('Do you identify as religious?',  'no/yes'),
	('How many sports did you play growing up?',  '8'),
	('How many contact sports did you play growing up?',  '4'),
	('Are the majority of your immediate family members tall, short, or average?','tall/short/average'),
	('How many times have you been diagnosed with covid-19?',  '2'),
	('Have you ever inhaled a toxic substance?',  'no/yes'),
	('Have you ever lived near a place that used pesticides?', 'no/yes'),
	('Is your long term memory awful, average, or great?','awful/average/great'),
	('Is your short term memory awful, average, or great?',  'awful/average/great'),
	('Have you ever been bitten by an animal to the point that blood was drawn?',  'no/yes'),
	('Are you diagnosed with bipolar or schizophrenia?',  'no/yes'),
	('If diagnosed with bipolar or schizophrenia, how many years have you been diagnosed for?',  '0'),
	('Do you have any form of sexual dysfunction?',  'no/yes'),
	('As a kid, did you ever witness domestic violence?',  'no/yes'),
	('As a kid, did you feel safe in your home?',  'no/yes'),
	('As a kid, were you bullied?',  'no/yes'),
	('As a kid, did you feel as if your family neglected you?',  'no/yes'),
	('As a kid, did you ever have a serious illness or accident?',  'no/yes'),
	('Do you often get caught in negative cyclical thought patterns that are hard to get out of?', 'no/yes'),
	('Was it easy or hard for you to make friends growing up?',  'easy/hard'),
	('What age, if any, did you first smoke a cigarrette?',  '93'),
	('What age, if any,did you have your first drink of alcohol?',  '94'),
	('What age, if any, did you first smoke marijuanna?',  '95'),
	('To the best of your knowledge, do you have big chunks of memory missing?',  'no/yes'),
	('Did your parents smoke cigarrettes near you when you were a child?','no/yes'),
	('Did your parents smoke inside the house?',  'no/yes'),
	('Were your parents violent?',  'no/yes'),
	('Were your parents emotionally neglectful or abusive?',  'no/yes'),
	('Are you a morning or night person?',  'morning/night'),
	('What age, if any, did you have you first cup of coffee?',  '2'),
	('Please list anything else you would like to add that you think may be relevant', 'Please try to keep this as short as possible');


--Need 134 rows here in answers

INSERT INTO "answers"("answer","questions_id","user_id") 
VALUES('newanswer','question id', 'user id')
ON CONFLICT "answer" action;

--------
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
	customer_id serial PRIMARY KEY,
	name VARCHAR UNIQUE,
	email VARCHAR NOT NULL,
	active bool NOT NULL DEFAULT TRUE
);

INSERT INTO 
    customers (name, email)
VALUES 
    ('IBM', 'contact@ibm.com'),
    ('Microsoft', 'contact@microsoft.com'),
    ('Intel', 'contact@intel.com');
    
    INSERT INTO customers (NAME, email)
VALUES('Microsoft','hotline@microsoft.com') 
ON CONFLICT ON CONSTRAINT customers_name_key 
DO NOTHING;
-------

CREATE TABLE "answers" (
	"id" SERIAL PRIMARY KEY,
	"questions_id" INT REFERENCES questions(id),
	"answer" VARCHAR(255),
	"user_id" INT REFERENCES "user"("id"),
 	 CONSTRAINT question_user_id UNIQUE("questions_id", "user_id") 
	);
	
INSERT INTO answers ("questions_id", "answer", "user_id")
    VALUES(8,'hmm',2)
    ON CONFLICT ON CONSTRAINT question_user_id 
    	DO
        UPDATE SET  "answer" = 'hmm'
        WHERE "answers"."user_id" = 2 AND "answers"."questions_id" = 8;
        
        
 DROP TABLE "answers";
 
  
INSERT INTO answers(questions_id,user_id, answer)
VALUES('3','red guess','5')
ON CONFLICT (questions_id, user_id) DO 
	UPDATE SET answer = EXCLUDED.answer;

CREATE TABLE "answers" (
	"id" SERIAL PRIMARY KEY,
	"questions_id" INT REFERENCES questions(id) UNIQUE,
	"answer" VARCHAR(255),
	"user_id" INT REFERENCES "user"("id") UNIQUE
);

--UPDATE "answers" 
--JOIN "questions" ON "questions"."id" = "answers"."questions_id"
--SET "answer" = 'req body' 
--WHERE "answers"."questions_id" = 2 AND "answers"."user_id" = 'req user';


DROP TABLE "answers";
 
--  
--INSERT INTO answers(questions_id,user_id, answer)
--VALUES('14','3','blue guess')
--ON CONFLICT (user_id) DO 
--	UPDATE SET answer = ' guess'
--	WHERE "answers".user_id = 3;
---
INSERT INTO answers(questions_id,user_id, answer)
VALUES('14','3','blue guess')
ON CONFLICT (user_id) DO 
	UPDATE SET answer = ' guess'
	WHERE "answers".user_id = 3;

---

INSERT INTO "answers" ("questions_id", "answer", "user_id")
VALUES 
;

-------------------------------------------------------------

DROP TABLE "answers";

CREATE TABLE "conditions" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255),
	"access_key" VARCHAR(255)
	);
DROP TABLE "conditions";

SELECT * FROM "conditions";

INSERT INTO "conditions" ("name","access_key")
VALUES 
	('allergies', 'fjd73'),
	('asthma', '83jf7'),
	('adrenocortical carcinoma','9d8ej'),
	('alzheimers', '38d8s'),
	('alopecia', 'aldue'),
	('ankylosing spondylitis','10001' ),
	('amyotrophic lateral sclerosis(ALS)', 'd03od' ),
	('arthritis', 'f8fsh' ),
	('ataxia', '162hd' ),
	('bipolar 1', '03od7' ),
	('bipolar 2', '3hsua' ),
	('cerebral amyloid angiopathy', 'd3io2' ),
	('chronic kidney disease', '85kds' ),
	('common cold', '0ppo9' ),
	('creutzfeldt-jakob disease', '93838' ),
	('crohns disease', 'dkah1' ),
	('coeliac disease', '47fhv' ),
	('cystic fibrosis', 'a3kd9' ),
	('dengue', '3748x' ),
	('depression', '8u8u9' ),
	('desmoplastic small-round-cell-tumor', '3f3f6' ),
	('diabetes type 1', '7g7gr' ),
	('diabetes type 2', '1g1g3' ),
	('dupuytrens disease', 'a8392' ),
	('epilepsy', '09873' ),
	('ehlers-danlos syndrome', '12349' ),
	('fatal familial insomnia', 'lll39' ),
	('fibrodysplasia ossificans progressiva', 'aaa8f' ),
	('fluoroquinolone toxicity syndrome', 'eeerh' ),
	('fibromyalgia', 'oodoo' ),
	('gastroparesis', '89ei1' ),
	('graves disease', '9090a' ),
	('hearing loss', 'lkjhg'  ),
	('HLH', 'asdfg' ),
	('hepatitis B', 'ikmki' ),
	('hereditary multiple exostoses', 'ujnju' ),
	('herpes simplex', 'yhbhy' ),
	('HIV/AIDS', 'tgvgt' ),
	('huntingtons disease', 'rfcfr' ),
	('hydrocephalus', 'edcde' ),
	('interstitial cystitis', 'edxde' ),
	('irritable bowel syndrome', 'wszsw' ),
	('immune thrombocytopenia', 'qazaq' ),
	('joint pain', 'mkokm' ),
	('leukemia', 'mnhth' ),
	('lichen planus', 'mnbvf' ),
	('lymphedema', 'njiko' ),
	('macular degeneration', 'njhuy' ),
	('marburg virus', 'njhgb' ),
	('multiple sclerosis', 'nbvcx' ),
	('muscular dystrophy', 'nbgtr' ),
	('myasthenia gravis', 'nbgfa' ),
	('norovirus', 'vbnmj' ),
	('naegleria fowleri', 'vghjy' ),
	('narcolepsy', 'vgftr' ),
	('osteoporosis', 'vfgre' ),
	('osteogenesis imperfecta', 'vfdsq' ),
	('parkinsons disease', 'vqwed' ),
	('paraphilia disorder', 'cvbgf' ),
	('pityriasis rubra pilaris', 'cvbfe' ),
	('prion disease(mad cow disease)', 'cgyte' ),
	('progeria', 'cdedc' ),
	('polio', 'cfrfc' ),
	('polycustic ovary sundrome', 'cxsws' ),
	('pre-eclampsia', 'cxzaq' ),
	('psoriasis', 'caqaq' ),
	('pulmonary hypertension', 'qazaq' ),
	('pulmonary fibrosis', 'qaswe' ),
	('postural orthostatic tachycardia syndrome', 'qsdsq' ),
	('rabies', 'qdgjl'),
	('retinitis pigmentosa', 'qwewq' ),
	('rett syndrome', 'wszas' ),
	('rheumatoid arthritis', 'wsdew' ),
	('schizophrenia', 'wsdf0' ),
	('scleroderma', 'edxde' ),
	('scoliosis', 'edcfe' ),
	('spinocerebellar ataxia', 'ertue' ),
	('severe acute respiratory syndrome', 'epoiu' ),
	('systemic lupus erythematosus', 'rfcfr' ),
	('trigeminal neuralgia', 'rfvfr' ),
	('toxoplasmosis', 'rgvfr' ),
	('tinnitus', 'rtghu' ),
	('ulcerative colitis', 'rutyr' ),
	('urethral stricture', 'tgvgt' ),
	('xeroderma pigmentosum', 'tgbgt' ),
	('anxiety', 'thnht' ),
	('post-traumatic stress disorder', 'thyut' ),
	('eating disorders', 'thjkt' ),
	('autism', 'yhbhy' ),
	('ADHD', 'yhnhy' ),
	('ADD', 'yujhy' ),
	('OCD', 'yyyhy' ),
	('bronchitis', 'yjklk' ),
	('hepatitis A', 'ujnju' ),
	('astigmatism', 'ujmju' ),
	('hepatitis C', 'uklku' ),
	('hepatitis D', 'uhghu' ),
	('hepatitis E', 'uiopo' ),
	('Lung cancer', 'uuuur' ),
	('beriberi', 'ijnji' ),
	('brain tumor', 'ijmji' ),
	('carpal tunnel syndrome', 'ikmki' ),
	('chagas disease', 'iklki' ),
	('chickenpox', 'iopoi' ),
	('chlamydia', 'iiiop' ),
	('colorectal cancer', 'iooop' ),
	('congestive heart disease', 'swqas' ),
	('coronary heart disease', 'sweds' ),
	('dementia', 'sxcds' ),
	('downs syndrome', 'sxzas' ),
	('guillain-barre sybdrome', 'dxsaw' ),
	('thyroid disease', 'dewqa' ),
	('measles', 'dertf' ),
	('mononucleosis', 'drtgf' ),
	('mumps', 'dcvfd' ),
	('nasal polyps', 'fredf' ),
	('obesity', 'frtgf' ),
	('paratyphoid fever', 'fdcvf' ),
	('pericarditis', 'fgvcf' ),
	('peritonitis', 'gtrfg' ),
	('pinguecula', 'gvcfg' ),
	('pneumonia', 'gtyhg' ),
	('porphyria', 'gbnhg' ),
	('puerperal sepsis', 'hytgh' ),
	('ques fever', 'hgbnh' ),
	('rheumatism', 'hyujh' ),
	('rift valley fever', 'hjnbg' ),
	('sarcoidosis', 'hkgl8' ),
	('scarlet fever', 'juyhj' ),
	('scrapie', 'jnbhj' ),
	('scurvy', 'juikj' ),
	('sepsis', 'jnmkj' ),
	('shin splints', 'kiujk' ),
	('sickle-cell anemia', 'kjnmk' ),
	('stomach ulcer', 'kmlok' ),
	('strep throat', 'f82fh' ),
	('syphilis', 'kolk1' ),
	('taeniasis', 'qpalc' ),
	('tay-sachs disease', 'wosld' ),
	('trachoma', 'rifjg' ),
	('trichinosis', 'tyfjs' ),
	('tularemia', 'zmsjr' ),
	('turners syndrome', 'vbdfj' ),
	('varicose veins', '1p2p3' ),
	('vitiligo', '1o2o2' ),
	('warkany syndrome', '1i1i1' ),
	('warts', '1u1u1' ),
	('yellow fever', '1t1t1' ),
	('zika virus disease', '1r1r1' ),
	('lactose intolerance', '1e1e1' ),
	('peanut allergy', '3m3m3' ),
	('cat allergy', '3k3k3' ),
	('dog allergy', '3l3l3' ),
	('seasonal allergies', '3p3p3' ),
	('brain cancer', '3y3y3' ),
	('blood cancer', '3t3t3' ),
	('breast cancer', '3r3r3' ),
	('cervical cancer', '3f3f3' ),
	('stomach cancer', '3d3d3' ),
	('esophageal cancer', '3s3s3' ),
	('head cancer', '3a3a3' ),
	('neck cancer', '4b4b4' ),
	('kidney cancer', '4n4n4' ),
	('lung cancer', '4p4p4' ),
	('matastatic cancer', '4o4o4' ),
	('ovarian cancer', 'i4i4i' ),
	('pancreatic cancer', '4u4u4' ),
	('prostate cancer', '4r4r4' ),
	('sarcoma', '4s4s4' ),
	('skin cancer', '4a4a4' ),
	('testicular cancer', '5p5p5' ),
	('thyroid cancer', '5o5o5' ),
	('uterine cancer', '5i5i5' ),
	('cirrhosis', '5u5u5' ),
	('end-stage renal disease', '5y5y5' ),
	('moyamoya disease', '5t5t5' ),
	('glioma', '5r5r5' ),
	('heart arrhythmia', '5e5e5' ),
	('heart valve disease', '5l5l5' ),
	('acid reflux', '5k5k5' ),
	('shingles', '5j5j5' ),
	('kidney stones', '5h5h5' ),
	('bone spurs', '5g5g5' ),
	('brain aneurysm', '5f5f5' ),
	('bruxism', '5d5d5' ),
	('tourette syndrome', '5s5s5' ),
	('catatonia', '5m5m5' ),
	('body dysmorphia', '5n5n5' ),
	('eczema(atopic dermatitis)', '5b5b5' ),
	('agoraphobia', '5v5v5' ),
	('panic disorder', '5c5c5' ),
	('lip cancer', '5x5x5' ),
	('liver cancer', '5z5z5' ),
	('mouth cancer', '6p6p6' ),
	('chronic cough', '6o6o6' ),
	('chronic hives', '6i6i6' ),
	('compulsive gambling', '6u6u6' ),
	('alcohol addiction', '6y6y6' ),
	('heroin addiciton', '6t6t6' ),
	('methamphetamine addiction', '7p7p7' ),
	('coronavirus', '7o7o7' ),
	('COPD', '7i7i7' ),
	('cushing syndrome', '7u7u7' ),
	('cyclic vomiting syndrome', '7y7y7' ),
	('bartholins cyst', '7t7t7' ),
	('ganglion cyst', '7l7l7' ),
	('kidney cyst', '7k7k7' ),
	('ovarian cyst', '7j7j7' ),
	('pancreatic cyst', '7g7g7' ),
	('pilonidal cyst', '7m7m7' ),
	('spermatic cyst', '7n7n7' ),
	('sebaceous cyst', '7b7b7' ),
	('interstitial cyst', '7v7v7' ),
	('chronic dry eyes', '7c7c7' ),
	('dyslexia', '8p8p8' ),
	('edema', '8o8o8' ),
	('eisenmenger syndrome', '8i8i8' ),
	('erectile dysfunction', '8t8t8' ),
	('exercise-induced asthma', '8l8l8' ),
	('female sexual dysfunction', '8k8k8' ),
	('folliculitis', '8h8h8' ),
	('fuchs dystrophy', '8j8j8' ),
	('functional dyspepsia', '8g8g8' ),
	('gender dyspohoria', '8f8f8' ),
	('glioblastoma', '8d8d8' ),
	('H1N1(swine flu)', '8z8z8' ),
	('hair loss', '8x8x8' ),
	('hashimotos disease', '8c8c8' ),
	('hay fever', '8v8v8' ),
	('hantavirus pulmonary syndrome', '9p9p9' ),
	('heart palpitations', '9o9o9' ),
	('heart murmurs', '9i9i9' ),
	('hemangioma', '9u9u9' ),
	('hemorrhoids', '9y9y9' ),
	('lynch syndrome', '9l9l9' ),
	('high blood pressure', '9k9k9' ),
	('hoarding disorder', '9j9j9' ),
	('hurthle cell cancer', '9h9h9' ),
	('hypercalcemia', '9g9g9' ),
	('hyperthyroidism', '9c9c9' ),
	('indigestion', '9v9v9' ),
	('klippel-trenaunay syndrome', '9b9b9' ),
	('personality disorder', '9n9n9' ),
	('plantar warts', '9m9m9' );
	
	CREATE TABLE "user_conditions" (
	"id" SERIAL PRIMARY KEY,
	"condition_id" INT REFERENCES conditions(id),
	"user_id" INT REFERENCES "user"("id"),
	"verified" VARCHAR DEFAULT 'false',
	"con_name" VARCHAR,
	 	 CONSTRAINT con_user_id UNIQUE("con_name", "user_id") 

	);
	
	
	----- testing this to make sure my data links correctly, it does :)
	SELECT "question","answer","user_id","firstName" FROM "answers" 
	JOIN "questions"
	ON "questions"."id" = "answers"."questions_id"
	JOIN "user"
	ON "user"."id" = "answers"."user_id"
	WHERE "user_id" = 9;
	
	SELECT * FROM "user_conditions"
	JOIN ;
	-----
	
SELECT * FROM "conditions" ;
SELECT * FROM "user" ;
SELECT * FROM "user_conditions";

SELECT * FROM "conditions"
WHERE "conditions"."access_key" = '6y6y6' ;

SELECT "user_id", "condition_id","con_name", "username", "key", "verified" FROM "user_conditions"
JOIN "user"
ON "user_conditions"."user_id" = "user"."id" 
WHERE "user"."id" = 6;
-- dealing with results grabbing data to show
SELECT * FROM "user_conditions"
JOIN "conditions"
ON "conditions"."id" = "user_conditions"."user_id"
WHERE "verified" = 'verified';




SELECT * FROM "user_conditions"
JOIN "conditions"
ON "conditions"."id" = "user_conditions"."user_id"
JOIN "user"
ON "user"."id" = "user_conditions"."user_id"
WHERE  "verified" = 'verified';

SELECT "question","answer" FROM "answers"
JOIN "questions"
ON "questions"."id" = "answers"."questions_id"

; 




DROP TABLE "user_conditions";

--- needs 251 entries YO
INSERT INTO "user_conditions" ("condition_id", "user_id", "verified")
VALUES
('1', '1', 'false'),
('2', '1', 'false'),
('3', '1', 'false'),
('4', '1', 'false'),
('5', '1', 'false'),
('6', '1', 'false'),
('7', '1', 'false'),
('8', '1', 'false'),
('9', '1', 'false'),
('10', '1', 'false'),
('11', '1', 'false'),
('12', '1', 'false'),
('13', '1', 'false'),
('14', '1', 'false'),
('15', '1', 'false'),
('16', '1', 'false'),
('17', '1', 'false'),
('18', '1', 'false'),
('19', '1', 'false'),
('20', '1', 'false'),
('21', '1', 'false'),
('22', '1', 'false'),
('23', '1', 'false'),
('24', '1', 'false'),
('25', '1', 'false'),
('26', '1', 'false'),
('27', '1', 'false'),
('28', '1', 'false'),
('29', '1', 'false'),
('30', '1', 'false'),
('31', '1', 'false'),
('32', '1', 'false'),
('33', '1', 'false'),
('34', '1', 'false'),
('35', '1', 'false'),
('36', '1', 'false'),
('37', '1', 'false'),
('38', '1', 'false'),
('39', '1', 'false'),
('40', '1', 'false'),
('41', '1', 'false'),
('42', '1', 'false'),
('43', '1', 'false'),
('44', '1', 'false'),
('45', '1', 'false'),
('46', '1', 'false'),
('47', '1', 'false'),
('48', '1', 'false'),
('49', '1', 'false'),
('50', '1', 'false'),
('51', '1', 'false'),
('52', '1', 'false'),
('53', '1', 'false'),
('54', '1', 'false'),
('55', '1', 'false'),
('56', '1', 'false'),
('57', '1', 'false'),
('58', '1', 'false'),
('59', '1', 'false'),
('60', '1', 'false'),
('61', '1', 'false'),
('62', '1', 'false'),
('63', '1', 'false'),
('64', '1', 'false'),
('65', '1', 'false'),
('66', '1', 'false'),
('67', '1', 'false'),
('68', '1', 'false'),
('69', '1', 'false'),
('70', '1', 'false'),
('71', '1', 'false'),
('72', '1', 'false'),
('73', '1', 'false'),
('74', '1', 'false'),
('75', '1', 'false'),
('76', '1', 'false'),
('77', '1', 'false'),
('78', '1', 'false'),
('79', '1', 'false'),
('80', '1', 'false'),
('81', '1', 'false'),
('82', '1', 'false'),
('83', '1', 'false'),
('84', '1', 'false'),
('85', '1', 'false'),
('86', '1', 'false'),
('87', '1', 'false'),
('88', '1', 'false'),
('89', '1', 'false'),
('90', '1', 'false'),
('91', '1', 'false'),
('92', '1', 'false'),
('93', '1', 'false'),
('94', '1', 'false'),
('95', '1', 'false'),
('96', '1', 'false'),
('97', '1', 'false'),
('98', '1', 'false'),
('99', '1', 'false'),
('100', '1', 'false'),
('101', '1', 'false'),
('102', '1', 'false'),
('103', '1', 'false'),
('104', '1', 'false'),
('105', '1', 'false'),
('106', '1', 'false'),
('107', '1', 'false'),
('108', '1', 'false'),
('109', '1', 'false'),
('110', '1', 'false'),
('111', '1', 'false'),
('112', '1', 'false'),
('113', '1', 'false'),
('114', '1', 'false'),
('115', '1', 'false'),
('116', '1', 'false'),
('117', '1', 'false'),
('118', '1', 'false'),
('119', '1', 'false'),
('120', '1', 'false'),
('121', '1', 'false'),
('122', '1', 'false'),
('123', '1', 'false'),
('124', '1', 'false'),
('125', '1', 'false'),
('126', '1', 'false'),
('127', '1', 'false'),
('128', '1', 'false'),
('129', '1', 'false'),
('130', '1', 'false'),
('131', '1', 'false'),
('132', '1', 'false'),
('133', '1', 'false'),
('134', '1', 'false'),
('135', '1', 'false'),
('136', '1', 'false'),
('137', '1', 'false'),
('138', '1', 'false'),
('139', '1', 'false'),
('140', '1', 'false'),
('141', '1', 'false'),
('142', '1', 'false'),
('143', '1', 'false'),
('144', '1', 'false'),
('145', '1', 'false'),
('146', '1', 'false'),
('147', '1', 'false'),
('148', '1', 'false'),
('149', '1', 'false'),
('150', '1', 'false'),
('151', '1', 'false'),
('152', '1', 'false'),
('153', '1', 'false'),
('154', '1', 'false'),
('155', '1', 'false'),
('156', '1', 'false'),
('157', '1', 'false'),
('158', '1', 'false'),
('159', '1', 'false'),
('160', '1', 'false'),
('161', '1', 'false'),
('162', '1', 'false'),
('163', '1', 'false'),
('164', '1', 'false'),
('165', '1', 'false'),
('166', '1', 'false'),
('167', '1', 'false'),
('168', '1', 'false'),
('169', '1', 'false'),
('170', '1', 'false'),
('171', '1', 'false'),
('172', '1', 'false'),
('173', '1', 'false'),
('174', '1', 'false'),
('175', '1', 'false'),
('176', '1', 'false'),
('177', '1', 'false'),
('178', '1', 'false'),
('179', '1', 'false'),
('180', '1', 'false'),
('181', '1', 'false'),
('182', '1', 'false'),
('183', '1', 'false'),
('184', '1', 'false'),
('185', '1', 'false'),
('186', '1', 'false'),
('187', '1', 'false'),
('188', '1', 'false'),
('189', '1', 'false'),
('190', '1', 'false'),
('191', '1', 'false'),
('192', '1', 'false'),
('193', '1', 'false'),
('194', '1', 'false'),
('195', '1', 'false'),
('196', '1', 'false'),
('197', '1', 'false'),
('198', '1', 'false'),
('199', '1', 'false'),
('200', '1', 'false'),
('201', '1', 'false'),
('202', '1', 'false'),
('203', '1', 'false'),
('204', '1', 'false'),
('205', '1', 'false'),
('206', '1', 'false'),
('207', '1', 'false'),
('208', '1', 'false'),
('209', '1', 'false'),
('210', '1', 'false'),
('211', '1', 'false'),
('212', '1', 'false'),
('213', '1', 'false'),
('214', '1', 'false'),
('215', '1', 'false'),
('216', '1', 'false'),
('217', '1', 'false'),
('218', '1', 'false'),
('219', '1', 'false'),
('220', '1', 'false'),
('221', '1', 'false'),
('222', '1', 'false'),
('223', '1', 'false'),
('224', '1', 'false'),
('225', '1', 'false'),
('226', '1', 'false'),
('227', '1', 'false'),
('228', '1', 'false'),
('229', '1', 'false'),
('230', '1', 'false'),
('231', '1', 'false'),
('232', '1', 'false'),
('233', '1', 'false'),
('234', '1', 'false'),
('235', '1', 'false'),
('236', '1', 'false'),
('237', '1', 'false'),
('238', '1', 'false'),
('239', '1', 'false'),
('240', '1', 'false'),
('241', '1', 'false'),
('242', '1', 'false'),
('243', '1', 'false'),
('244', '1', 'false'),
('245', '1', 'false'),
('246', '1', 'false'),
('247', '1', 'false'),
('248', '1', 'false'),
('249', '1', 'false'),
('250', '1', 'false'),
('251', '1', 'false');



----------

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(255) NOT NULL UNIQUE,
	"password" VARCHAR(255),
	"firstName" VARCHAR(255),
	"lastName" VARCHAR(255),
	"email" VARCHAR(255),
	"key" VARCHAR(255),
	"profile_pic" VARCHAR
);

DROP TABLE "user";
INSERT INTO "user" ("username","password","firstName","lastName","email")
VALUES 
	('xx_coolguy_xx', 'fIodl27D','Bill','Billerson','bingbong@gmail.com'),
	('yungGravy', 'b83ldksi','Carol','Baskins','wwwwuuuu@gmail.com'),
	('righteousLizard', 'kdilaob!','Samantha','Carlson','harrylarry@gmail.com'),
	('wiggly_woogely', '849dksjYid','Jim','Jameson','woohoo@yahoo.com'),
	('studMuff', '7dj3Lhs','Brad','Bonkly','olduser123@aol.com');
		

SELECT * FROM "user";
SELECT * FROM "questions";
SELECT * FROM "conditions";
SELECT * FROM "user_conditions";
SELECT * FROM "answers";

SELECT * FROM "user"
JOIN "answers"
ON "answers"."user_id" = "user"."id"
JOIN "questions"
ON "questions"."id" = "answers"."questions_id";


SELECT * FROM "questions"
JOIN "user"
ON "user"."id" = "questions"."id"
JOIN "answers" 
ON "user"."id" = "answers"."id"
WHERE "user"."firstName" = 'Bill';

-- This only tests for one user, will need to be updated for when being applied
-- I will also modify this when I want to update the answer into this user's answer,
-- I can also grab the list of answers from the user with this as well as just questions
SELECT "answers","answers"."id" FROM "answers"
JOIN "user"
ON "user"."id" = "answers"."user_id"
JOIN "questions" 
ON "questions"."id" = "answers"."id"
;

-- This method will display all the conditions data for the specific user,
-- It can show whether the user is verfied for that specific condition too
SELECT * FROM "user_conditions"
JOIN "user" 
ON "user"."id" = "user_conditions"."user_id"
JOIN "conditions"
ON "conditions"."id" = "user_conditions"."condition_id";

--Maybe use crossjoin if I can't figure this out 
SELECT DISTINCT "questions"."question" FROM "answers"
CROSS JOIN "user"
CROSS JOIN "questions"
WHERE "user"."firstName" = 'Bill'
;


SELECT "questions"."question" FROM "answers"
JOIN "user"
ON "user"."id" = "answers"."user_id"
JOIN "questions"
ON "questions"."id" = "answers"."questions_id";
-- update answer set whatever where question id = question id that the request has and 
-- user id matches the req.user.id- 
-- NEEDS THE USER ID AND THE QUESTIONS ID
SELECT * FROM "answers"
CROSS JOIN "user"
CROSS JOIN "questions"
;
UPDATE "answers" 
SET  "answers" = 'howdy'
WHERE "answers"."id" = '1';

UPDATE "answers" 
    SET "answers" = $1
    WHERE "answers"."id" = $2;

SELECT DISTINCT "conditions"."name" FROM "user_conditions"
CROSS JOIN "user" 
CROSS JOIN "conditions"
WHERE "user"."firstName" = 'Bill';

INSERT INTO "answers" ("answers")
VALUES ('sdfasdfasd')
;
SELECT * FROM "answers"
    JOIN "user"
    ON "user"."id" = "answers"."user_id"
    JOIN "questions" 
    ON "questions"."id" = "answers"."id"
    JOIN "user_conditions"
    ON "user_conditions"."user_id" = "user"."id";
    
    UPDATE "answers" 
    SET  "answer" = 'yo'
    WHERE "answers"."id" = 2;
    
    UPDATE "answers"
    SET "answer" = $1, "user_id" = $3
    WHERE "id" = $2;
    
    SELECT * FROM "user_conditions"
    JOIN "conditions"
    ON "conditions"."id" = "user_conditions"."condition_id"
    WHERE "conditions"."name" = 'allergies' AND "user_conditions"."verified" = 'verified';
    
    
    
-- In create table
--- CONSTRAINT user_question UNIQUE (user_id, questions_id)

-- I nthe upsert query
ON CONFLICT ON CONSTRAINT user_question;



 SELECT * FROM "user_conditions"
        JOIN "conditions"
        ON "conditions"."id" = "user_conditions"."condition_id"
        JOIN "questions"
        ON "questions"."id" = "user_conditions"."condition_id"
        JOIN "answers"
        ON "answers"."questions_id" = "questions"."id"
        WHERE "conditions"."name" = 'asthma' AND "user_conditions"."verified" = 'verified';
        
        
        
   SELECT * FROM "questions"
   JOIN "user_conditions"
   ON "questions"."id" = "user_conditions"."id";
        
   SELECT * FROM "answers"
   LEFT JOIN "questions"
   ON "questions"."id" = "answers"."questions_id"
   LEFT JOIN "user_conditions"
   ON "user_conditions"."id" = "answers"."user_id"
   LEFT JOIN "conditions"
   ON "conditions"."name" = "user_conditions"."con_name";
        
   SELECT * FROM "questions"
   JOIN "answers"
   ON "questions"."id" = "answers"."questions_id"
   JOIN "user"
   ON "user"."id" =  "answers"."user_id"
   JOIN "user_conditions"
   ON "user_conditions".
   
   ;
   --this one gets what i need lol
   SELECT "question", "questions_id", "answer" FROM "questions"
   JOIN "answers"
   ON "answers"."questions_id" = "questions"."id"
   JOIN "user"
   ON "user"."id" = "answers"."user_id"
   JOIN "user_conditions"
   ON "user_conditions"."user_id" = "user"."id"
   WHERE "user_conditions"."con_name" = 'allergies' AND "user_conditions"."verified" = 'verified'
   ;
   
   SELECT DISTINCT "question", "questions_id", "answer" FROM "questions"
   JOIN "answers"
   ON "answers"."questions_id" = "questions"."id"
   JOIN "user"
   ON "user"."id" = "answers"."user_id"
   JOIN "user_conditions"
   ON "user_conditions"."user_id" = "user"."id"
   WHERE "user_conditions"."con_name" = 'allergies' AND "user_conditions"."verified" = 'verified'
   ;

   
   
   
     SELECT DISTINCT "question" FROM "questions"
   JOIN "answers"
   ON "answers"."questions_id" = "questions"."id"
   JOIN "user"
   ON "user"."id" = "answers"."user_id"
   JOIN "user_conditions"
   ON "user_conditions"."user_id" = "user"."id"
   WHERE "user"."id" = 9
   
   ;
     
        SELECT * FROM "user_conditions"
        LEFT JOIN "conditions"
        ON "conditions"."id" = "user_conditions"."condition_id"
        LEFT JOIN "questions"
        ON "questions"."id" = "user_conditions"."condition_id"
        LEFT JOIN "answers"
        ON "questions"."id" = "answers"."questions_id"
        WHERE "conditions"."name" = 'asthma' AND "user_conditions"."verified" = 'verified';
	
	