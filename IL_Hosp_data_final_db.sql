DROP TABLE hospital_data_final;

CREATE TABLE hospital_data_final (
	hospital_name VARCHAR,
	city VARCHAR,
	staffedbeds INT,
	totaldischarges INT,
	patientdays INT,
	gross_patientrevenue_usd INT,
	latitude DECIMAL,
	longitude DECIMAL,
	google_stars DECIMAL
);
SELECT * FROM hospital_data_final