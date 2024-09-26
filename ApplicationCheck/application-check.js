// 예시 근로 데이터
  const dataSet = [
    {
      workName: "할머니냉면",
      workAddress: "서울 동대문구 왕산로37길 53",
      distance: "",
      startDate: "2024-07-14",
      finishDate: "2024-11-21",
    },
    {
      workName: "세븐일레븐",
      workAddress: "서울 동대문구 망우로 77",
      distance: "",
      startDate: "2024-04-15",
      finishDate: "2024-10-17",
    },
    {
      workName: "피자파스토",
      workAddress: "서울 동대문구 망우로12가길 33 1층",
      distance: "",
      startDate: "2024-02-11",
      finishDate: "2024-08-31",
    },
    {
      workName: "미스터피자",
      workAddress: "서울 노원구 석계로1길 22",
      distance: "",
      startDate: "2023-07-14",
      finishDate: "2024-10-17",
    },
    {
      workName: "스타벅스",
      workAddress: "서울 노원구 석계로 104",
      distance: "",
      startDate: "2024-07-24",
      finishDate: "2024-08-17",
    },
  ];
  // 예시 복지관 데이터
  const dataSet2 =[
    {
        "연번": 1,
        centerName: "강동노인종합복지관",
        "기관장": "성미선",
        centerTelNum: "442-1026",
        centerFax: "442-1046",
        "우편번호": 5269,
        centerAddress: "서울시 강동구 동남로71길 32-5(명일동)"
    },
    {
        "연번": 2,
        centerName: "강북노인종합복지관",
        "기관장": "일지스님",
        centerTelNum: "999-9179",
        centerFax: "995-8956",
        "우편번호": 1082,
        centerAddress: "서울시 강북구 삼양로92길 40(수유동)"
    },
    {
        "연번": 3,
        centerName: "강서노인종합복지관",
        "기관장": "임무영",
        centerTelNum: "3664-0322",
        centerFax: "3665-1340",
        "우편번호": 7590,
        centerAddress: "서울시 강서구 화곡로61길 85(등촌동)"
    },
    {
        "연번": 4,
        centerName: "관악노인종합복지관",
        "기관장": "이석영",
        centerTelNum: "888-6144",
        centerFax: "888-8026",
        "우편번호": 8708,
        centerAddress: "서울시 관악구 보라매로 35(봉천동)"
    },
    {
        "연번": 5,
        centerName: "광진노인종합복지관",
        "기관장": "화평스님",
        centerTelNum: "466-6242",
        centerFax: "466-6245",
        "우편번호": 5004,
        centerAddress: "서울시 광진구 군자로 88(군자동)"
    },
    {
        "연번": 6,
        centerName: "구로노인종합복지관",
        "기관장": "임성희",
        centerTelNum: "838-4600",
        centerFax: "838-8213",
        "우편번호": 8289,
        centerAddress: "서울시 구로구 새말로16길 7(구로동)"
    },
    {
        "연번": 7,
        centerName: "금천노인종합복지관",
        "기관장": "구자훈",
        centerTelNum: "804-4058",
        centerFax: "804-4059",
        "우편번호": 8634,
        centerAddress: "서울시 금천구 시흥대로51길 93-32(시흥동)"
    },
    {
        "연번": 8,
        centerName: "노원노인종합복지관",
        "기관장": "박지은",
        centerTelNum: "948-8540",
        centerFax: "948-1617",
        "우편번호": 1748,
        centerAddress: "서울시 노원구 노원로16길 15(하계동)"
    },
    {
        "연번": 9,
        centerName: "도봉노인종합복지관",
        "기관장": "이은주",
        centerTelNum: "993-9900",
        centerFax: "993-0511",
        "우편번호": 1394,
        centerAddress: "서울시 도봉구 도당로2길 12-13(쌍문동)"
    },
    {
        "연번": 10,
        centerName: "동대문노인종합복지관",
        "기관장": "민경원",
        centerTelNum: "963-0565",
        centerFax: "3295-1844",
        "우편번호": 2462,
        centerAddress: "서울시 동대문구 제기로33길 25(청량리동)"
    },
  ]
  //데이터 받아오기
  const userData = {
    name: "홍길동",
    phone: "010-1234-5678",
    address: "서울특별시 강남구",
    career: "카페 - 3년",
    healthState: "양호",
    wishList: "운동 프로그램",
    points: 1200,
  };

  // 상단 로그인 정보와 회원정보 영역에 이름을 설정
  document.getElementById("TopUserName").textContent = userData.name;


  
  //@@ 근로 검색
  function searchAppliedJob() {
    const container = document.getElementById("appliedJobContainer");
    if (!container) {
      console.error("Container with id 'appliedJobContainer' not found.");
      return;
    }

    const programName = document.getElementById("program-name").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    // 프로그램명, 시작일, 종료일 중 하나라도 입력되지 않으면 경고
    if (!programName && (!startDate || !endDate)) {
      alert("프로그램명 또는 날짜를 입력해주십시오.");
      return;
    }

    // 조건에 맞는 데이터 필터링
    const filteredData = dataSet.filter((item) => {
      const itemStartDate = new Date(item.startDate);
      const itemFinishDate = new Date(item.finishDate);
      const userStartDate = startDate ? new Date(startDate) : null;
      const userEndDate = endDate ? new Date(endDate) : null;

      const isDateInRange =
        (!userStartDate || itemStartDate >= userStartDate) &&
        (!userEndDate || itemFinishDate <= userEndDate);
      const isNameMatch = !programName || item.workName.includes(programName);

      return isDateInRange && isNameMatch;
    });

    // 테이블 업데이트
    const tbody = container.querySelector("tbody");
    if (!tbody) {
      console.error("Table body not found.");
      return;
    }

    tbody.innerHTML = ""; // 기존 내용을 지움

    if (filteredData.length > 0) {
      filteredData.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.workName}</td>
        <td>${item.workAddress}</td>
        <td>${item.startDate}</td>
        <td>${item.finishDate}</td>
      `;
        tbody.appendChild(row);
      });
      container.querySelector("table").style.display = "table"; // 테이블 표시
    } else {
      alert("조건에 맞는 결과가 없습니다.");
      container.querySelector("table").style.display = "none"; // 결과가 없으면 테이블 숨김
    }
  }


  //@@근로 초기화
  function clearAppliedJobTable() {
    const container = document.getElementById("appliedJobContainer");
    if (!container) {
      console.error("Container with id 'appliedJobContainer' not found.");
      return;
    }

    const tbody = container.querySelector("tbody");
    if (!tbody) {
      console.error("Table body not found.");
      return;
    }

    tbody.innerHTML = ""; // 테이블 내용 삭제
    // 모든 input 요소를 선택
    const inputs = container.querySelectorAll("input");

    inputs.forEach((input) => {
      if (input.type === "radio" || input.type === "checkbox") {
        input.checked = false; // 체크박스 및 라디오 버튼의 경우 선택 해제
      } else if (input.type === "text" || input.type === "date") {
        input.value = ""; // 텍스트 및 날짜 입력 필드의 경우 값 비우기
      }
    });
    container.querySelector("table").style.display = "none"; // 테이블 숨김
  }


  //@@교육 검색
  function searchAppliedProgram() {
    const container = document.getElementById("appliedProContainer");
    if (!container) {
      console.error("Container with id 'appliedProContainer' not found.");
      return;
    }

    const programName = document.getElementById("program-name-2").value;
    // const startDate = document.getElementById("start-date-2").value;
    // const endDate = document.getElementById("end-date-2").value;

    // 프로그램명, 시작일, 종료일 중 하나라도 입력되지 않으면 경고
    if (!programName && (!startDate || !endDate)) {
      alert("프로그램명 또는 날짜를 입력해주십시오.");
      return;
    }

    // 조건에 맞는 데이터 필터링
    const filteredData = dataSet2.filter((item) => {
      const isNameMatch = !programName || item.centerName.includes(programName);
      return  isNameMatch;
    });

    // 테이블 업데이트
    const tbody = container.querySelector("tbody");
    if (!tbody) {
      console.error("Table body not found.");
      return;
    }

    tbody.innerHTML = ""; // 기존 내용을 지움

    if (filteredData.length > 0) {
      filteredData.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.centerName}</td>
        <td>${item.centerAddress}</td>
        <td>${item.centerTelNum}</td>
        <td>${item.centerFax}</td>
      `;
        tbody.appendChild(row);
      });
      container.querySelector("table").style.display = "table"; // 테이블 표시
    } else {
      alert("조건에 맞는 결과가 없습니다.");
      container.querySelector("table").style.display = "none"; // 결과가 없으면 테이블 숨김
    }
  }


  //@@교육검색 초기화
  function clearAppliedProgramTable() {
    const container = document.getElementById("appliedProContainer");
    if (!container) {
      console.error("Container with id 'appliedProContainer' not found.");
      return;
    }

    const tbody = container.querySelector("tbody");
    if (!tbody) {
      console.error("Table body not found.");
      return;
    }

    tbody.innerHTML = ""; // 테이블 내용 삭제
    // 모든 input 요소를 선택
    const inputs = container.querySelectorAll("input");

    inputs.forEach((input) => {
      if (input.type === "radio" || input.type === "checkbox") {
        input.checked = false; // 체크박스 및 라디오 버튼의 경우 선택 해제
      } else if (input.type === "text" || input.type === "date") {
        input.value = ""; // 텍스트 및 날짜 입력 필드의 경우 값 비우기
      }
    });
    container.querySelector("table").style.display = "none"; // 테이블 숨김
  }

  window.onload = function () {
    const jobTable = document.querySelector("#appliedJobContainer table");
    const proTable = document.querySelector("#appliedProContainer table");

    if (jobTable) {
      jobTable.style.display = "none";
    }
    if (proTable) {
      proTable.style.display = "none";
    }
  };
