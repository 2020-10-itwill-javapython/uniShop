<%@page import="com.itwill.unishop.domain.Member"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

</head>
<body>
	회원 정보 수정
	<form name="f" action="member_update_action" method="POST">
	
		<input type="text" name="sMemberId" value="${loginMember.member_id}" >
		
		<input type="text" name="member_name" value="${loginMember.member_name}">
		<input type="text" name="member_password" value="${loginMember.member_password}">
		<input type="text" name="member_confirm_password" value="비밀번호 재확인">
		<input type="text" name="member_email" value="${loginMember.member_email}">
		<input type="text" name="member_phone" value="${loginMember.member_phone}">
		<input type="submit">
		
		<input type="text" name="member_address_name" value="${loginMember.member_address_name}">
		<input type="text" name="member_address_country" value="${loginMember.member_address_country}">
		<input type="text" name="member_address_city" value="${loginMember.member_address_city}">
		<input type="text" name="member_address_zipcode" value="${loginMember.member_address_zipcode}">
		<input type="text" name="member_address1" value="${loginMember.member_address1}">
		<input type="text" name="member_address2" value="${loginMember.member_address2}">
		<input type="submit">
		
	</form>
	주문 목록
	<form name="f" method="POST">
		<input type="text" name="jumunList" value="${jumunList}">
	</form>
	찜 목록<br/>
	<c:forEach items="${wishList}" var="wishList" begin="0" step="1" end="${wishList.size()}">
			<a href="shop_product_detail?product_no='${wishList.product_no}'">상품 번호</a><c:out value="${wishList.product_no}"/>
			상품 이름<c:out value="${wishList.product.product_name}"/>
			찜 번호<c:out value="${wishList.wish_no}"/><br/>
		</c:forEach>	
	QnA 목록
	<form name="f" method="POST">
		<c:forEach items="${questionList}" var="question" begin="0" step="1" end="${questionList.size()}"/>
		<input type="text" name="questionList" value="${questionList}">
		<a href="member_question_detail?question_no='${question.question_no}'">QnA 디테일 보기</a>
	</form>
</body>
</html>