export interface QnA {
  id: number;
  question: string;
  answer: string;
}

export const qnaList: QnA[] = [
  {
    id: 1,
    question: "RIFT là gì và nền tảng này giải quyết bài toán gì cho người dùng?",
    answer: "Hiện tại chắc hẳn bạn đang khá mệt mỏi khi phải tải ba bốn ứng dụng khác nhau chỉ để theo dõi thị trường tiền số, chứng khoán và hàng hóa. Việc dòng tiền bị phân tán và thao tác chậm chạp thường xuyên làm bạn lỡ mất điểm vào lệnh đẹp.\n\nGiống như việc bạn phải cầm trên tay ba chiếc điện thoại để nhắn tin cho ba người cùng lúc vậy. Vừa cồng kềnh vừa dễ xảy ra sai sót.\n\nRIFT ra đời như một siêu ứng dụng kết nối thẳng bạn với mọi thị trường tài chính lớn. Hệ thống này nén ba yếu tố quan trọng nhất là trí tuệ thị trường để nhận diện cơ hội, khả năng thực thi tự động và lồng quản trị rủi ro vào một màn hình duy nhất.\n\nVới RIFT, bạn không cần tự mình dò dẫm biểu đồ hay gồng mình chống lại thị trường nữa. Máy móc sẽ tính toán sẵn các điểm ra vào tối ưu, việc của bạn chỉ là xem xét và vuốt màn hình để hệ thống tự động xử lý phần còn lại.",
  },
  {
    id: 2,
    question: "RIFT hỗ trợ những thị trường nào và tại sao lại gộp chúng trên cùng một nền tảng?",
    answer: "Rất nhiều người từng rơi vào cảnh cháy túi ở bên chứng khoán nhưng tiền bên ví tiền số thì lại nằm im không thể mang sang cứu lệnh kịp thời. Cảm giác nhìn tiền bị kẹt ở nhiều nơi mà không thể xoay xở thật sự rất ức chế.\n\nRIFT giải quyết triệt để chuyện này bằng cách kết nối cả ba thị trường khổng lồ là Tiền mã hoá, Chứng khoán phái sinh và Hàng hoá như vàng, dầu mỏ vào chung một nền tảng duy nhất.\n\nHãy hình dung bạn đang dùng một chiếc ví điện tử có thể thanh toán được cả tiền điện, tiền nước lẫn mua sắm siêu thị. RIFT cho phép bạn dùng chung một nguồn vốn để giao dịch chéo giữa tất cả các thị trường này.\n\nBạn thấy thị trường nào đang có xu hướng đẹp nhất thì lập tức dồn vốn sang đó ngay trong tích tắc mà không tốn phí chuyển đổi. Vốn của bạn luôn được luân chuyển và sinh lời một cách hiệu quả nhất.",
  },
  {
    id: 3,
    question: "Tại sao RIFT lại ưu tiên Trí tuệ thực thi thay vì giao diện bóng bẩy?",
    answer: "Các sàn giao dịch hiện nay thường dụ dỗ người dùng bằng những giao diện sặc sỡ, thêm đủ loại âm thanh pháo hoa chúc mừng mỗi khi chốt lời. Tuy nhiên chính sự rối rắm này làm bạn xao nhãng và khớp lệnh chậm hơn.\n\nMột chiếc siêu xe đua F1 không bao giờ cần màn hình giải trí hay ghế bọc da sang trọng. Nó bị lột bỏ mọi thứ rườm rà chỉ để tối ưu hóa động cơ và tốc độ.\n\nRIFT đi theo triết lý đó. Chúng tôi vứt bỏ hoàn toàn lớp áo hào nhoáng bên ngoài để dồn toàn bộ sức mạnh vào lớp thực thi bên dưới. Hệ thống tập trung tối đa vào tốc độ đưa lệnh vào thị trường và thuật toán bảo vệ vốn.\n\nĐiều này giúp bạn tránh được tình trạng giật lag khi có tin tức lớn và luôn khớp được mức giá đẹp nhất thay vì bị phân tâm bởi những hiệu ứng vô bổ.",
  },
  {
    id: 4,
    question: "Cơ chế Vuốt hoạt động ra sao và nó giúp ích gì cho người mới?",
    answer: "Người mới thường hoảng loạn vì không biết cài đặt cắt lỗ ở đâu, chốt lời mức nào, mua khối lượng bao nhiêu cho an toàn. Việc phải tự nhập tay hàng tá con số khi thị trường đang chạy nhanh khiến họ thường xuyên thao tác sai.\n\nCơ chế Vuốt của RIFT giống như việc bạn gọi xe trên ứng dụng. App đã tính sẵn quãng đường, giá tiền và điểm đến. Bạn chỉ việc nhìn thông tin, thấy hợp lý thì bấm nút đặt xe là xong.\n\nTrí tuệ nhân tạo của RIFT sẽ quét dữ liệu liên tục để tìm cơ hội rõ ràng nhất, sau đó hiển thị sẵn thông số điểm vào lệnh, điểm cắt lỗ và chốt lời. Khi bạn thấy chiến lược này phù hợp, bạn chỉ cần một thao tác vuốt màn hình.\n\nNgay lập tức, hệ thống sẽ đẩy lệnh vào thị trường với tốc độ phần nghìn giây và tự động tuân thủ nghiêm ngặt các rào cản rủi ro đã đề ra. Bạn được giải phóng hoàn toàn khỏi nỗi lo bấm nhầm số hay tính toán sai.",
  },
  {
    id: 5,
    question: "Bộ não định tuyến là gì và vì sao nó bảo vệ được lợi nhuận của tôi?",
    answer: "Đã bao giờ bạn bấm mua ở mức giá một trăm nhưng hệ thống lại báo khớp ở giá một trăm lẻ hai chưa. Trong giao dịch người ta gọi đây là hiện tượng trượt giá, một kẻ thù thầm lặng ăn mòn tiền của bạn mỗi khi thị trường biến động mạnh.\n\nHãy tưởng tượng bạn cần mua một ngàn vé xem phim. Nếu bạn ra quầy và hô to rằng tôi cần mua một ngàn vé, lập tức đám cò mồi xung quanh sẽ gom hết vé để ép bạn mua giá cao. Bộ não định tuyến của RIFT giống như việc bạn thuê cùng lúc một ngàn người xếp hàng ở các quầy khác nhau, mỗi người mua đúng một vé trong im lặng.\n\nThay vì đẩy một cục lệnh lớn ra thị trường, thuật toán của RIFT sẽ băm nhỏ lệnh của bạn ra và giấu kín khỏi mắt các quỹ giao dịch tần suất cao. Cuối cùng bạn mua đủ số lượng với mức giá tốt nhất mà không bị ai phát hiện hay làm giá.",
  },
  {
    id: 6,
    question: "Thực thi mang tính tất định là gì và nó chống gian lận ra sao?",
    answer: "Các sàn giao dịch thông thường hoạt động như một chiếc hộp đen. Bạn gửi lệnh đi nhưng không thể biết sàn có om lệnh của bạn lại vài giây để họ ưu tiên khớp lệnh cho chính họ trước hay không.\n\nThực thi tất định đơn giản là một quy luật toán học, khi đưa cùng một dữ liệu đầu vào thì luôn phải cho ra chính xác một kết quả, không có ngoại lệ. Giống như việc bạn bỏ đồng xu vào máy bán nước tự động, máy bắt buộc phải nhả ra chai nước chứ không thể ngẫu nhiên nuốt luôn tiền của bạn.\n\nTrên nền tảng RIFT, mọi thứ chạy bằng mã nguồn lập trình. Khi lệnh của bạn được vuốt đi, nó bắt buộc phải được xử lý ngay lập tức theo đúng quy tắc đã viết ra. Không một ai kể cả đội ngũ sáng lập có quyền can thiệp hay thay đổi thứ tự ưu tiên của bạn.",
  },
  {
    id: 7,
    question: "Hệ thống quản trị rủi ro cấu trúc bảo vệ tôi khỏi những cú sập như thế nào?",
    answer: "Lý do lớn nhất khiến nhà giao dịch mất trắng tài sản không phải là do họ phân tích kém, mà là do sự chần chừ và hy vọng hão huyền khi thị trường cắm đầu lao dốc. Cơ thể sinh học của con người không đủ nhanh để phản ứng cắt lỗ khi biểu đồ sập trong vài giây.\n\nHệ thống của RIFT biến kỷ luật từ việc tự gồng mình thành một quy tắc bắt buộc. Giống như phanh tự động trên các dòng xe hơi cao cấp, khi phát hiện có vật cản phía trước mà bạn không kịp đạp phanh, xe sẽ tự hãm lại để cứu mạng bạn.\n\nTrước khi bất kỳ lệnh nào được đẩy đi, nó đã bị khóa chặt vào một cơ chế quản trị rủi ro. Các thông số dừng lỗ và kiểm soát số lượng được hệ thống ghi nhận cứng. Dù thị trường có xảy ra bão táp hay sập mạnh đến đâu, máy móc vô cảm sẽ tự động cắt lệnh chính xác tại điểm an toàn đã tính toán, đảm bảo tiền của bạn không bao giờ bốc hơi hoàn toàn.",
  },
  {
    id: 8,
    question: "Giao dịch không lưu ký trên RIFT nghĩa là gì?",
    answer: "Ở những sàn truyền thống, bạn phải nạp tiền vào ví của họ để giao dịch. Nếu ngày mai sàn đó tuyên bố phá sản hoặc bị tin tặc tấn công, tiền của bạn cũng sẽ biến mất theo.\n\nGiao dịch không lưu ký trên RIFT giống như việc bạn tự giữ tiền trong két sắt tại nhà mình, khi nào ra chợ mua mớ rau thì chỉ đưa đúng số tiền đó cho người bán chứ không đưa cả ví cho ai giữ hộ.\n\nTiền luôn nằm trong ví cá nhân của bạn. RIFT tuyệt đối không có quyền đụng chạm hay giữ nguồn vốn này. Hệ thống chỉ đóng vai trò là một đường ống tốc độ cao giúp nối lệnh của bạn thẳng đến sổ cái thị trường. Bạn là người duy nhất nắm quyền kiểm soát tài sản của mình từ đầu đến cuối.",
  },
  {
    id: 9,
    question: "RIFT xây dựng trên Blockchain Hyperliquid có làm giao dịch bị chậm đi không?",
    answer: "Nhiều người vẫn mang định kiến rằng nhắc đến công nghệ chuỗi khối là nhắc đến sự chậm chạp và tắc nghẽn mạng lưới. Họ sợ việc bấm nút xong phải chờ cả phút lệnh mới khớp.\n\nTuy nhiên Hyperliquid không giống các mạng lưới thông thường. Nó là một nền tảng chuyên biệt chỉ phục vụ duy nhất cho mục đích tài chính.\n\nHãy tưởng tượng thay vì đi trên một con đường hỗn hợp đông đúc xe máy, xe đạp và người đi bộ, bạn đang lái xe trên một đường ray cao tốc dành riêng cho tàu siêu tốc. Không có ai chơi game hay lướt mạng xã hội trên con đường này để cản trở bạn.\n\nNhờ đó, mạng lưới này có khả năng xử lý hàng chục ngàn giao dịch mỗi giây với tốc độ phản hồi cực kỳ thấp. Nó biến thành một động cơ hoàn hảo để cỗ máy RIFT hoạt động mượt mà không chút độ trễ.",
  },
  {
    id: 10,
    question: "Làm sao tôi biết nền tảng minh bạch và không thao túng dòng tiền?",
    answer: "Nhà giao dịch đã quá quen với những lời hứa hẹn suông từ các nền tảng truyền thống. Khi có biến cố xảy ra, họ thường đổ lỗi cho lỗi hệ thống hoặc biến động thị trường khách quan mà không đưa ra được bằng chứng.\n\nSự minh bạch của RIFT không phải là lời hứa, mà nó được mã hóa rõ ràng trên dữ liệu chuỗi khối. Điều này giống như một cuốn sổ cái được in ra và phát cho hàng triệu người cùng giữ. Nếu có bất kỳ ai lén sửa một con số, tất cả những người khác đều nhìn thấy ngay.\n\nMọi giao dịch mua bán, sửa đổi lệnh hay nguồn gốc dòng tiền đều được ghi lại vĩnh viễn trên mạng lưới để bất kỳ ai cũng có thể tra cứu. Bạn hoàn toàn có thể tự mình kiểm chứng dòng chảy thanh khoản thực tế thay vì phải tin tưởng mù quáng vào một hộp đen giấu kín.",
  },
  {
    id: 11,
    question: "Thanh toán trực tiếp trên chuỗi có lợi ích gì cho việc rút nạp tiền?",
    answer: "Rất nhiều người dùng từng khóc ròng khi thị trường sập nhưng lệnh rút tiền lại bị hệ thống thông báo đang bảo trì hoặc chờ nhân sự duyệt thủ công mất hàng tuần lễ.\n\nTrên RIFT, mọi thứ được vận hành bởi hợp đồng thông minh. Giống như máy ATM hoạt động xuyên đêm, bạn đút thẻ vào thao tác đúng mật khẩu là máy nhả tiền ngay lập tức mà không cần gọi hỏi nhân viên ngân hàng xem họ có rảnh để duyệt lệnh hay không.\n\nQuá trình thanh toán tiền diễn ra trực tiếp trên hệ thống tự động. Ngay đúng khoảnh khắc lệnh của bạn chốt lời hoặc cắt lỗ xong, tiền lập tức chạy thẳng về ví cá nhân của bạn theo thời gian thực. Không có bất kỳ tổ chức hay cá nhân nào có quyền đóng băng hoặc giam giữ số vốn mà bạn làm ra.",
  },
  {
    id: 12,
    question: "Lời khuyên nào từ RIFT dành cho người dùng trong kỷ nguyên mới?",
    answer: "Đa số chúng ta vẫn giữ thói quen ngồi dán mắt vào màn hình máy tính thâu đêm suốt sáng để rình rập một cây nến xanh đỏ. Thói quen này vắt kiệt sức khỏe, cảm xúc và thường dẫn đến những quyết định sai lầm.\n\nTrong khi đó, thị trường hiện tại bị chi phối bởi các hệ thống tự động chạy nhanh hơn con người hàng triệu lần. Bạn không thể dùng cơ bắp để đua với máy móc. Lời khuyên của chúng tôi là hãy thay đổi tư duy, từ việc tự tay cầm cuốc đào đất sang việc học cách điều khiển một cỗ máy xúc.\n\nHãy nhường những công việc tay chân như canh giá, cắt lỗ và khớp lệnh siêu tốc cho trí tuệ nhân tạo. Việc của bạn là đứng ở góc nhìn vĩ mô hơn, hoạch định chiến lược vốn, quản trị cảm xúc bản thân và chọn đúng thời điểm để trao quyền thực thi cho RIFT. Máy móc làm việc của máy móc, con người làm việc của con người, đó mới là cách kiếm tiền thông minh."
  }
];
