INSERT INTO jumun (jumun_no, JUMUN_DATE, JUMUN_STATUS, JUMUN_TOT_PRICE, CARD_NO, CARD_EXPIRE_DATE, CARD_CVC, CARD_MEMBER_NAME, MEMBER_ID) 
VALUES (jumun_jumun_no_SEQ.nextval, sysdate, 'Delivered', 79800, '1234 5678 9012 3456', '08/25', '123', '신혜원', 'uni1');

INSERT INTO jumun (jumun_no, JUMUN_DATE, JUMUN_STATUS, JUMUN_TOT_PRICE, CARD_NO, CARD_EXPIRE_DATE, CARD_CVC, CARD_MEMBER_NAME, MEMBER_ID) 
VALUES (jumun_jumun_no_SEQ.nextval, sysdate, 'Delayed', 99800, '9876 5432 1098 7654', '02/21', '456', '신지원', 'uni2');

INSERT INTO jumun (jumun_no, JUMUN_DATE, JUMUN_STATUS, JUMUN_TOT_PRICE, CARD_NO, CARD_EXPIRE_DATE, CARD_CVC, CARD_MEMBER_NAME, MEMBER_ID) 
VALUES (jumun_jumun_no_SEQ.nextval, sysdate, 'Canceled', 59800, '1346 7964 2585 1973', '06/23', '789', '김민정', 'uni3');

commit;