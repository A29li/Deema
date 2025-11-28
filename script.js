document.addEventListener('DOMContentLoaded', () => {
    // تحديد النوافذ المنبثقة (Modals) للمنتجات الأربعة الجديدة
    const modals = {
        'gray-suit': document.getElementById('gray-suit-modal'),
        'fur-jacket': document.getElementById('fur-jacket-modal'),
        'skirt-suit': document.getElementById('skirt-suit-modal'),
        'black-suit': document.getElementById('black-suit-modal'),
        // يمكنك إضافة المزيد من هنا (القوالب الشاغرة)
    };

    // وظيفة لفتح المودال عند النقر على "تفاصيل وسعر المنتج"
    document.querySelectorAll('.btn-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-product-id');
            const modal = modals[productId];
            if (modal) {
                modal.style.display = 'block';
                // إعادة تعيين معرض الصور إلى الصورة الأولى عند الفتح
                resetGallery(modal);
            }
        });
    });

    // وظيفة لإغلاق المودال باستخدام زر الإغلاق (X)
    document.querySelectorAll('.close-btn').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            // إغلاق المودال الأقرب لزر الإغلاق
            const modal = closeBtn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // إغلاق المودال عند النقر خارجها
    window.addEventListener('click', (e) => {
        for (let key in modals) {
            if (e.target === modals[key]) {
                modals[key].style.display = 'none';
            }
        }
    });

    // --- وظائف معرض الصور (Gallery Functions) ---
    
    // وظيفة إعادة تعيين المعرض إلى الصورة الأولى
    function resetGallery(modal) {
        const images = modal.querySelectorAll('.gallery-image');
        const dots = modal.querySelectorAll('.dot');
        
        // إخفاء جميع الصور
        images.forEach(img => img.classList.remove('active'));
        // إلغاء تفعيل كل النقاط
        dots.forEach(dot => dot.classList.remove('active'));
        
        // عرض الصورة الأولى وتفعيل النقطة الأولى
        if (images.length > 0) {
            images[0].classList.add('active');
            dots[0].classList.add('active');
        }
    }

    // وظيفة التنقل بين الصور باستخدام النقاط
    document.querySelectorAll('.gallery-nav .dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            const targetIndex = parseInt(e.target.getAttribute('data-index'));
            const modal = e.target.closest('.product-details-modal');
            const images = modal.querySelectorAll('.gallery-image');
            const dots = modal.querySelectorAll('.dot');
            
            // إخفاء كل شيء
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            // عرض الصورة والنقطة المستهدفة
            images[targetIndex].classList.add('active');
            e.target.classList.add('active');
        });
    });
    
});
