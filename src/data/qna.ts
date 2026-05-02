export interface QnA {
  id: number;
  question: string;
  answer: string;
}

export const qnaList: QnA[] = [
  {
    id: 1,
    question: "RIFT là gì và nền tảng này giải quyết bài toán gì cho Trader?",
    answer: "RIFT (Routing Intelligence Futures Trading) là nền tảng giao dịch phái sinh thế hệ mới, đóng vai trò như một lớp 'hạ tầng thống nhất' kết nối người dùng với thị trường tài chính toàn cầu.\n\nThay vì bắt người dùng phải đối mặt với sự phân mảnh của thị trường (nhiều sàn, nhiều ứng dụng), tốc độ khớp lệnh chậm và rủi ro cảm xúc, RIFT nén 3 yếu tố cốt lõi vào một trải nghiệm duy nhất: **Trí tuệ thị trường (AI nhận diện) – Thực thi tự động – Quản trị rủi ro cấu trúc**. Với RIFT, bạn không còn phải 'chiến đấu' thủ công với thị trường, mà đóng vai trò như một người quản lý chiến lược, phê duyệt các quyết định tối ưu do máy móc đề xuất.",
  },
  {
    id: 2,
    question: "RIFT hỗ trợ những thị trường nào? Tại sao lại gộp chúng trên cùng một nền tảng?",
    answer: "RIFT cung cấp khả năng giao dịch hợp đồng tương lai trên 3 thị trường khổng lồ:\n1. **Crypto Futures** (Tiền mã hoá).\n2. **Stock Futures** (Phái sinh cổ phiếu truyền thống).\n3. **Commodity Futures** (Hàng hoá như Vàng, Dầu...).\n\n**Lý do gộp chung:** Trong lịch sử, vốn của Trader thường bị 'kẹt' rải rác: một ít ở sàn chứng khoán, một ít ở sàn Crypto. RIFT phá vỡ bức tường này bằng cách cho phép **ký quỹ chéo (cross-margin)** mượt mà. Vốn của bạn không bị 'nằm chết' mà có thể luân chuyển ngay lập tức tới bất kỳ đâu có cơ hội tốt nhất. Nó giống như việc bạn chỉ cần một chiếc 'điều khiển vạn năng' để bật tắt mọi kênh tài sản.",
  },
  {
    id: 3,
    question: "Tại sao RIFT lại ưu tiên 'Trí tuệ thực thi' (Execution Intelligence) thay vì giao diện bóng bẩy?",
    answer: "Nhiều năm qua, ngành công nghiệp tài chính đã dồn quá nhiều tiền vào việc làm cho giao diện (UI/UX) thật sặc sỡ, có âm thanh vỗ tay hay pháo hoa nổ khi giao dịch thành công.\n\nNhưng RIFT nhận ra một sự thật: **Giao diện đẹp không tạo ra lợi nhuận**. Lợi nhuận và hiệu suất thực sự nằm ở lớp thực thi bên dưới – ở tốc độ khớp lệnh và mức độ giảm thiểu trượt giá.\nĐiều này giống như việc so sánh một chiếc xe đua có màn hình giải trí tuyệt đẹp với một chiếc xe được tối ưu hóa động cơ và kim phun nhiên liệu. Trong một cuộc đua tốc độ, ghế da đẹp không giúp bạn chiến thắng, sức mạnh động cơ mới là thứ định đoạt kết cục. RIFT đại diện cho sự thay đổi đó: Tập trung 100% vào cơ chế khớp lệnh thay vì lớp vỏ hào nhoáng.",
  },
  {
    id: 4,
    question: "'Cơ chế Vuốt' (Swipe to Trade) hoạt động ra sao? Nó giúp ích gì cho người mới?",
    answer: "Đây là cơ chế biến các thao tác phức tạp thành một trải nghiệm tuyến tính 4 bước siêu tốc:\n- **Bước 1 (AI quét):** Trí tuệ nhân tạo rà soát hàng tỷ điểm dữ liệu để tìm ra các cơ hội giao dịch rõ ràng nhất.\n- **Bước 2 (Gợi ý):** Cơ hội được đưa ra màn hình, loại bỏ sự quá tải thông tin.\n- **Bước 3 (Bạn phê duyệt):** Bạn đánh giá và 'Vuốt' (Swipe) để xác nhận.\n- **Bước 4 (Thực thi chớp nhoáng):** Ngay khi bạn vuốt, hệ thống đồng thời thiết lập 3 thông số: *Điểm vào (Entry) - Cắt lỗ (Risk) - Chốt lời (Target)* và đẩy vào thị trường trong vài mili-giây.\n\n**Lợi ích:** Bạn vẫn là người làm chủ quyết định (không giao phó 100% cho bot), nhưng máy móc sẽ thay bạn làm những công việc nhàm chán và đòi hỏi tốc độ cao.",
  },
  {
    id: 5,
    question: "'Bộ não định tuyến' (Routing Intelligence) là gì? Vì sao nó bảo vệ được lợi nhuận của tôi?",
    answer: "Hãy tưởng tượng Routing Intelligence giống như một **'Trạm kiểm soát không lưu'** tại một sân bay bận rộn.\n\nKhi bạn đặt một lệnh mua lớn, nếu ném thẳng vào thị trường, lệnh đó sẽ đẩy giá lên cao khiến bạn phải mua với giá đắt (gọi là Trượt giá - Slippage). Để giải quyết việc này, 'Bộ não' của RIFT sẽ quét qua hàng loạt lớp thanh khoản ẩn, tự động chia nhỏ lệnh của bạn ra trong 1 phần nghìn giây và phân bổ vào các mức giá tốt nhất. Nó còn che giấu lệnh của bạn khỏi các 'cá mập' (quỹ HFT) chuyên rình rập để chạy trước lệnh (front-running). Kết quả: Bạn luôn khớp được mức giá tối ưu nhất.",
  },
  {
    id: 6,
    question: "'Thực thi mang tính tất định' (Deterministic Execution) là gì và nó chống gian lận ra sao?",
    answer: "'Tính tất định' hiểu đơn giản là: **Cùng một đầu vào sẽ luôn cho ra cùng một kết quả, không có ngoại lệ.**\n\nỞ các sàn giao dịch truyền thống (mô hình hộp đen), lệnh của bạn có thể bị sàn giữ lại vài mili-giây để họ ưu tiên khớp lệnh của họ trước rồi mới đến lượt bạn. Nhưng trên RIFT, nhờ hoạt động hoàn toàn bằng mã nguồn (code) và toán học thuần túy, một khi lệnh được đẩy vào, nó **bắt buộc** phải được xử lý chính xác theo thuật toán đã định. Không một ai – kể cả người tạo ra nền tảng – có thể chen ngang hay can thiệp vào lệnh của bạn.",
  },
  {
    id: 7,
    question: "Hệ thống 'Quản trị rủi ro có cấu trúc' bảo vệ tôi khỏi những cú sập (Flash Crash) như thế nào?",
    answer: "Một trong những nguyên nhân khiến 90% Trader thua lỗ là **độ trễ sinh học** (sự chần chừ, hoảng loạn, hi vọng giá sẽ hồi) khi thị trường cắm đầu.\n\nHệ thống của RIFT biến Kỷ luật từ việc 'cố gắng gồng mình' thành **quy tắc toán học bắt buộc**. Trước khi lệnh của bạn được đẩy đi, nó đã bị 'nhốt' vào một chiếc lồng quản trị rủi ro. Các thông số Dừng lỗ (Stop-loss) và Kích cỡ lệnh (Position sizing) được khóa cứng. Dù thị trường có sập nhanh đến mấy, máy móc không có cảm xúc sẽ cắt lỗ chính xác tại điểm đã tính toán, bảo toàn nguồn vốn sống còn cho bạn.",
  },
  {
    id: 8,
    question: "Giao dịch 'Không lưu ký' (Non-custodial) trên RIFT nghĩa là gì?",
    answer: "Trong giới tài chính, nguyên tắc sống còn là: **'Not your keys, not your coins'** (Không giữ chìa khoá, tiền không phải của bạn).\nỞ các sàn giao dịch truyền thống, bạn nạp tiền vào ví của sàn, nếu sàn phá sản (như sự kiện FTX) hoặc bị hack, bạn mất trắng.\n\nVới cơ chế **Không lưu ký (Non-custodial)** của RIFT, tiền luôn nằm trong ví cá nhân của bạn. RIFT không bao giờ được phép đụng vào nguồn vốn này. Hệ thống chỉ đóng vai trò kết nối lệnh của bạn với sổ lệnh (order book). Bạn là người duy nhất nắm quyền sinh sát đối với tài sản của mình.",
  },
  {
    id: 9,
    question: "RIFT chọn xây dựng trên Blockchain Hyperliquid. Điều này có làm giao dịch bị chậm đi không?",
    answer: "**Hoàn toàn không, ngược lại còn cực kỳ nhanh!**\nNhiều người nghĩ blockchain (như Bitcoin, Ethereum) thường chậm và tắc nghẽn. Nhưng Hyperliquid là một mạng lưới **Layer 1 chuyên biệt chỉ dành riêng cho tài chính (App-chain)**.\nNó không xử lý game, hình ảnh số hay mạng xã hội, mà chỉ tập trung toàn bộ năng lực để khớp lệnh. Nhờ đó, Hyperliquid xử lý hàng chục ngàn giao dịch mỗi giây với độ trễ siêu thấp, biến nó thành đường ray tốc độ cao để 'Bộ não định tuyến' của RIFT hoạt động mượt mà.",
  },
  {
    id: 10,
    question: "Làm sao tôi biết nền tảng minh bạch và không thao túng dòng tiền?",
    answer: "Sự minh bạch của RIFT không đến từ lời hứa, mà đến từ **mã nguồn mở và dữ liệu chuỗi (On-chain)**. Nó được xây dựng trên 4 trụ cột minh bạch tuyệt đối:\n1. **Xác minh trên chuỗi:** Mọi lệnh mua bán, sửa đổi hay hủy đều lưu vết vĩnh viễn, ai cũng có thể kiểm chứng.\n2. **Thực thi tất định:** Lệnh chạy bằng toán học thuần túy.\n3. **Hoạt động thị trường công khai:** Dữ liệu sổ lệnh và dòng tiền được hiển thị công khai cho mọi người.\n4. **Thanh khoản minh bạch:** Nguồn gốc tiền rõ ràng, cho phép người dùng tự xác minh các nhóm thanh khoản thực tế. Bạn không bao giờ phải giao dịch mù mờ với một hệ thống 'hộp đen'.",
  },
  {
    id: 11,
    question: "Thanh toán trực tiếp trên chuỗi (On-chain Settlement) có lợi ích gì cho việc rút/nạp tiền?",
    answer: "Ở sàn truyền thống, khi bạn muốn rút tiền, bạn phải thực hiện lệnh và chờ đợi nhân sự hoặc hệ thống của sàn 'duyệt'. Đôi khi quá trình này bị kẹt lại không rõ lý do.\n\nTrên RIFT, với **On-chain Settlement**, quá trình thanh toán diễn ra trực tiếp qua smart contract (hợp đồng thông minh) và không cần thông qua bất kỳ tổ chức trung gian nào. Ngay khi lệnh giao dịch của bạn chốt lời hoặc cắt lỗ, tiền được cộng thẳng vào ví của bạn (hoàn tất gần như tức thì - near instant finality). Quyết toán diễn ra tự động, không ai có quyền đóng băng hoặc giam vốn của bạn.",
  },
  {
    id: 12,
    question: "Lời khuyên nào từ RIFT dành cho nhà giao dịch cá nhân trong kỷ nguyên mới?",
    answer: "Hãy ngừng việc ngồi dán mắt vào màn hình 24/7 để rình rập bấm nút! Thị trường hiện đại bị chi phối bởi các thuật toán chạy nhanh hơn phản xạ của bạn hàng triệu lần.\n\nTương lai của giao dịch nằm ở **'Trí tuệ thực thi'**. Hãy để máy móc làm việc của máy móc: Khớp lệnh siêu tốc, theo dõi biến động mili-giây, chia nhỏ lệnh và tuân thủ rủi ro một cách tàn nhẫn. Việc của bạn là nâng tầm tư duy: Nhìn nhận bức tranh vĩ mô, thiết lập chiến lược ở tầng cao, phân bổ rủi ro hợp lý và bấm 'Vuốt' để trao quyền thực thi cho một hệ thống đáng tin cậy.",
  }
];
