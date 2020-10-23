package com.itwill.unishop.repository.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.itwill.unishop.repository.MemberRepository;

public class MemberDaoTestMain {

	public static void main(String[] args) {
		ApplicationContext applicationContext=new ClassPathXmlApplicationContext("spring/application-config.xml");
		MemberRepository memberRepository=(MemberRepository)applicationContext.getBean("memberRepositoryImpl");
		System.out.println(memberRepository.selectMemberById("uni1"));		
	}

}