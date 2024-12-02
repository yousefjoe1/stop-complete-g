import type { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';

  export const companionsData: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) =>  [
    {
      key: "1",
      label: "أبو بكر الصديق",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>اسمه: عبد الله بن عثمان التيمي</li>
            <li>أول خليفة راشد</li>
            <li>صاحب النبي محمد ﷺ في الغار</li>
            <li>أول من أسلم من الرجال</li>
            <li>صهر النبي ﷺ وأبو زوجته عائشة</li>
            <li>توفي سنة 13 هـ</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      style: panelStyle,
      label: "أبو ذر الغفاري",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>اسمه: جندب بن جنادة</li>
            <li>من السابقين الأولين للإسلام</li>
            <li>معروف بالزهد والورع</li>
            <li>من أوائل المسلمين في مكة</li>
            <li>اشتهر بالصدق والإخلاص</li>
            <li>توفي سنة 32 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "3",
      style: panelStyle,
      label: "أبو هريرة الدوسي",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>اسمه: عبد الرحمن بن صخر</li>
            <li>أكثر الصحابة رواية للحديث</li>
            <li>أسلم في عام خيبر</li>
            <li>روى أكثر من 5374 حديثاً</li>
            <li>لُقب بـ "حافظ الأمة"</li>
            <li>توفي سنة 59 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "4",
      style: panelStyle,
      label: "أبي بن كعب",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من كتّاب الوحي</li>
            <li>أول من جمع القرآن</li>
            <li>كان معلماً للصحابة</li>
            <li>وصفه النبي ﷺ بأنه أعلم الأمة بالقرآن</li>
            <li>توفي سنة 30 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "5",
      style: panelStyle,
      label: "بلال بن رباح",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أول مؤذن في الإسلام</li>
            <li>عبد أسود من أصل حبشي</li>
            <li>من المعذبين في مكة بسبب إسلامه</li>
            <li>من المبشرين بالجنة</li>
            <li>سُمع صوته بالأذان في الجنة</li>
            <li>توفي سنة 20 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "6",
      style: panelStyle,
      label: "بريدة الأسلمي",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من الصحابة المشهورين</li>
            <li>شهد غزوات عديدة مع النبي ﷺ</li>
            <li>راوي أحاديث كثيرة</li>
            <li>قائد عسكري بارز</li>
            <li>توفي سنة 63 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "7",
      style: panelStyle,
      label: "تميم الداري",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من الصحابة المشهورين</li>
            <li>راهب نصراني أسلم</li>
            <li>من رواة الحديث</li>
            <li>معروف بقصة الجساسة</li>
            <li>توفي سنة 40 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "8",
      style: panelStyle,
      label: "تميمة بن أوس",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>صحابي معروف</li>
            <li>من أهل المدينة المنورة</li>
            <li>شارك في فتوحات الشام</li>
            <li>معروف بشجاعته وإخلاصه</li>
          </ul>
        </>
      ),
    },
    {
      key: "9",
      style: panelStyle,
      label: "جابر بن عبد الله",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>آخر الصحابة وفاة بالمدينة</li>
            <li>راوي أكثر من 1500 حديث</li>
            <li>صاحب مناقب كثيرة</li>
            <li>عاش حتى سنة 78 هـ</li>
            <li>شهد العديد من الغزوات</li>
          </ul>
        </>
      ),
    },
    {
      key: "10",
      style: panelStyle,
      label: "جرير بن عبد الله",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من القادة البارزين</li>
            <li>أسلم قبل فتح مكة</li>
            <li>معروف بفصاحته وبلاغته</li>
            <li>شارك في فتوحات الشام والعراق</li>
            <li>توفي سنة 51 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "11",
      label: "حذيفة بن اليمان",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>صاحب سر رسول الله ﷺ</li>
            <li>كان يعرف المنافقين</li>
            <li>من كبار الصحابة المطلعين</li>
            <li>شهد العديد من الغزوات</li>
            <li>توفي سنة 36 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "12",
      style: panelStyle,
      label: "خباب بن الأرت",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من السابقين الأولين للإسلام</li>
            <li>تعرض للتعذيب في مكة</li>
            <li>حرفته الحدادة</li>
            <li>من أوائل المهاجرين</li>
            <li>توفي سنة 37 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "13",
      style: panelStyle,
      label: "زيد بن ثابت",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>كاتب الوحي الرئيسي</li>
            <li>حافظ القرآن الكريم</li>
            <li>كان يتقن عدة لغات</li>
            <li>جمع القرآن في عهد أبي بكر وعثمان</li>
            <li>توفي سنة 45 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "14",
      style: panelStyle,
      label: "سلمان الفارسي",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أول فارسي يسلم</li>
            <li>كان عبداً ثم تحرر</li>
            <li>من المقربين للنبي ﷺ</li>
            <li>شارك في غزوة الخندق بفكرة حفر الخندق</li>
            <li>توفي سنة 35 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "15",
      style: panelStyle,
      label: "سعد بن أبي وقاص",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أول من رمى بسهم في سبيل الله</li>
            <li>أحد القادة العسكريين البارزين</li>
            <li>فاتح العراق</li>
            <li>من العشرة المبشرين بالجنة</li>
            <li>توفي سنة 55 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "16",
      style: panelStyle,
      label: "صهيب الرومي",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من السابقين الأولين للإسلام</li>
            <li>كان من الموالي الروم</li>
            <li>من المهاجرين الأوائل</li>
            <li>معروف بكرمه وشجاعته</li>
            <li>توفي سنة 38 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "17",
      style: panelStyle,
      label: "طلحة بن عبيد الله",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أحد العشرة المبشرين بالجنة</li>
            <li>من كبار التجار في المدينة</li>
            <li>شهد بيعة الرضوان</li>
            <li>قُتل في معركة الجمل</li>
            <li>توفي سنة 36 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "18",
      style: panelStyle,
      label: "عبد الله بن عباس",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابن عم النبي ﷺ</li>
            <li>لُقب بـ "حبر الأمة"</li>
            <li>عالم التفسير الأول</li>
            <li>روى العديد من الأحاديث</li>
            <li>توفي سنة 68 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "19",
      style: panelStyle,
      label: "عبد الله بن مسعود",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من السابقين الأولين للإسلام</li>
            <li>ثالث من أسلم</li>
            <li>قارئ القرآن المشهور</li>
            <li>من حفظة الوحي</li>
            <li>توفي سنة 32 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "20",
      style: panelStyle,
      label: "عثمان بن عفان",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>الخليفة الثالث</li>
            <li>أحد العشرة المبشرين بالجنة</li>
            <li>جمع المسلمين على مصحف واحد</li>
            <li>ذو النورين لزواجه من ابنتي النبي ﷺ</li>
            <li>توفي سنة 35 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "21",
      style: panelStyle,
      label: "علي بن أبي طالب",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابن عم وصهر النبي ﷺ</li>
            <li>الخليفة الرابع</li>
            <li>أسد الله الغالب</li>
            <li>أول من أسلم من الصبيان</li>
            <li>توفي سنة 40 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "22",
      style: panelStyle,
      label: "عمر بن الخطاب",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>الخليفة الثاني</li>
            <li>أحد العشرة المبشرين بالجنة</li>
            <li>فُتحت في عهده بلاد كثيرة</li>
            <li>اشتهر بالعدل والحزم</li>
            <li>توفي سنة 23 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "23",
      style: panelStyle,
      label: "عمار بن ياسر",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من المستضعفين الأوائل</li>
            <li>تعرض للتعذيب في مكة</li>
            <li>من السابقين الأولين</li>
            <li>استشهد في معركة صفين</li>
            <li>توفي سنة 37 هـ</li>
          </ul>
        </>
      ),
    },
    {
        key: "24",
      style: panelStyle,
        label: "قيس بن سعد",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>قائد عسكري بارز</li>
              <li>من أنصار علي بن أبي طالب</li>
              <li>شارك في معارك الفتوحات</li>
              <li>معروف بشجاعته وحكمته</li>
              <li>توفي سنة 60 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "25",
      style: panelStyle,
        label: "كعب الأحبار",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>تابعي يمني من أهل اليمن</li>
              <li>كان عالماً بالكتب السماوية</li>
              <li>أسلم بعد وفاة النبي ﷺ</li>
              <li>نقل العديد من الروايات</li>
              <li>توفي سنة 32 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "26",
      style: panelStyle,
        label: "مالك الأشتر",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>من أنصار علي بن أبي طالب</li>
              <li>قائد عسكري شجاع</li>
              <li>له دور بارز في الفتوحات</li>
              <li>معروف بحكمته وشدته</li>
              <li>توفي سنة 38 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "27",
      style: panelStyle,
        label: "معاذ بن جبل",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>من العلماء البارزين</li>
              <li>أول من جمع القرآن باليمن</li>
              <li>واله النبي ﷺ على اليمن</li>
              <li>معروف بالفقه والعلم</li>
              <li>توفي سنة 18 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "28",
      style: panelStyle,
        label: "نافع مولى ابن عمر",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>راوي حديث مشهور</li>
              <li>من رواة السنة المعتمدين</li>
              <li>عاش مع عبد الله بن عمر</li>
              <li>موثوق بروايته</li>
              <li>توفي سنة 117 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "29",
      style: panelStyle,
        label: "هاشم بن عتبة",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>صحابي من الأنصار</li>
              <li>شارك في الفتوحات</li>
              <li>معروف بالشجاعة والإخلاص</li>
              <li>من رواة الحديث</li>
              <li>توفي سنة 40 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "30",
      style: panelStyle,
        label: "وائل بن حجر",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>صحابي من حضرموت</li>
              <li>من الوفود إلى النبي ﷺ</li>
              <li>شارك في الفتوحات</li>
              <li>معروف بالشعر والفصاحة</li>
              <li>توفي سنة 50 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "31",
      style: panelStyle,
        label: "يزيد بن ركانة",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>صحابي من قريش</li>
              <li>أسلم قبل فتح مكة</li>
              <li>معروف بالشجاعة</li>
              <li>من المكثرين في الرواية</li>
              <li>توفي سنة 40 هـ</li>
            </ul>
          </>
        ),
      }]

  export const companionsDataFemal: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) =>  [
    {
      key: "1",
      label: "خديجة بنت خويلد",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>زوجة النبي محمد ﷺ الأولى</li>
            <li>أم المؤمنين</li>
            <li>أول من آمن بدعوة النبي ﷺ</li>
            <li>كانت تُلقب بالطاهرة</li>
            <li>دعمته ماليًا ومعنويًا في بداية الدعوة</li>
            <li>توفيت في عام الحزن (السنة 10 من البعثة)</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: "عائشة بنت أبي بكر",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>زوجة النبي محمد ﷺ</li>
            <li>بنت الخليفة الأول أبو بكر الصديق</li>
            <li>لقبت بأم المؤمنين</li>
            <li>روت عددًا كبيرًا من الأحاديث</li>
            <li>كانت عالمة في الفقه والتفسير</li>
            <li>توفيت سنة 58 هـ ودفنت في البقيع</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: "فاطمة بنت أسد",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>زوجة أبي طالب ووالدة علي بن أبي طالب</li>
            <li>كانت كالأم للنبي محمد ﷺ بعد وفاة أمه</li>
            <li>أسلمت وهاجرت إلى المدينة</li>
            <li>النبي ﷺ كفنها في قميصه وصلى عليها</li>
            <li>توفيت في المدينة المنورة</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label: "أسماء بنت أبي بكر",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>لقبت بذات النطاقين</li>
            <li>ساعدت النبي ﷺ وأباها أثناء الهجرة</li>
            <li>أخت أم المؤمنين عائشة</li>
            <li>كانت صابرة وشجاعة</li>
            <li>عاشت حتى رأت مقتل ابنها عبد الله بن الزبير</li>
            <li>توفيت سنة 73 هـ</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "5",
      label: "حفصة بنت عمر",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>زوجة النبي محمد ﷺ</li>
            <li>بنت الخليفة الثاني عمر بن الخطاب</li>
            <li>لقبت بحارسة القرآن</li>
            <li>كان المصحف المكتوب محفوظًا عندها</li>
            <li>توفيت سنة 45 هـ ودفنت في البقيع</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "6",
      label: "سميّة بنت خياط",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أول شهيدة في الإسلام</li>
            <li>أم الصحابي عمار بن ياسر</li>
            <li>استشهدت بسبب تعذيب قريش لها</li>
            <li>ضربت مثالًا في الصبر والثبات على الحق</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "7",
      label: "صفية بنت عبد المطلب",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>عمة النبي محمد ﷺ</li>
            <li>أم الصحابي الزبير بن العوام</li>
            <li>كانت شجاعة وشاركت في غزوة الخندق</li>
            <li>قتلت يهوديًا حاول التسلل إلى حصن المسلمين</li>
            <li>توفيت سنة 20 هـ</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "8",
      label: "أم سلمة هند بنت أبي أمية",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>زوجة النبي محمد ﷺ</li>
            <li>أم المؤمنين</li>
            <li>كانت من أوائل من هاجر إلى الحبشة</li>
            <li>كانت حكيمة ولها رأي سديد</li>
            <li>توفيت سنة 61 هـ ودفنت في البقيع</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "9",
      label: "رُقيّة بنت محمد",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابنة النبي محمد ﷺ</li>
            <li>زوجة عثمان بن عفان</li>
            <li>هاجرت إلى الحبشة مع زوجها</li>
            <li>توفيت أثناء غزوة بدر</li>
            <li>كان النبي ﷺ يحبها كثيرًا</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "10",
      label: "زينب بنت جحش",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>زوجة النبي محمد ﷺ</li>
            <li>كانت معروفة بالعبادة والصدقة</li>
            <li>لقبت بأم المساكين</li>
            <li>شاركت في أعمال البر والخير</li>
            <li>توفيت سنة 20 هـ ودفنت في البقيع</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "11",
      label: "فاطمة الزهراء",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابنة النبي محمد ﷺ</li>
            <li>زوجة علي بن أبي طالب</li>
            <li>أم الحسن والحسين</li>
            <li>كانت من أحب الناس إلى النبي ﷺ</li>
            <li>توفيت سنة 11 هـ بعد وفاة النبي ﷺ</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "12",
      label: "أم عمارة نسيبة بنت كعب",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>صحابية جليلة من الأنصار</li>
            <li>شاركت في غزوة أحد بشجاعة</li>
            <li>دافعت عن النبي ﷺ في المعركة</li>
            <li>أصيبت بجراح كثيرة أثناء الجهاد</li>
            <li>كانت مثالًا للتضحية في سبيل الله</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "13",
      label: "أم حرام بنت ملحان",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من الصحابيات المهاجرات</li>
            <li>أخت أم سليم وزوجة عبادة بن الصامت</li>
            <li>بشّرها النبي ﷺ بالشهادة</li>
            <li>شاركت في الغزو البحري الأول للمسلمين</li>
            <li>استشهدت في قبرص ودفنت هناك</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "14",
      label: "أم أيمن بركة بنت ثعلبة",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>مولاة النبي محمد ﷺ</li>
            <li>كانت كأم له بعد وفاة والدته</li>
            <li>أسلمت منذ بداية الدعوة</li>
            <li>شاركت في الهجرة إلى المدينة</li>
            <li>بشّرها النبي ﷺ بالجنة</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
  ];
  export const phrophets: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) =>  [
    {
      key: "1",
      label: "آدم عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أبو البشر وأول الأنبياء</li>
            <li>خلقه الله بيده ونفخ فيه من روحه</li>
            <li>أسكنه الله الجنة مع زوجته حواء</li>
            <li>أنزله الله إلى الأرض بعد معصية الأكل من الشجرة</li>
            <li>كان نبيًا يدعو لعبادة الله وحده</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: "إدريس عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من الأنبياء الأوائل</li>
            <li>أول من خط بالقلم</li>
            <li>عرف بالزهد والعبادة</li>
            <li>رفعه الله إلى مكان عليّ</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: "نوح عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أول رسول أرسله الله إلى قومه</li>
            <li>دعا قومه لعبادة الله وحده 950 عامًا</li>
            <li>بنى السفينة بأمر الله ونجا فيها المؤمنون</li>
            <li>هلك الكافرون بالطوفان</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label: "إبراهيم عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أبو الأنبياء وخليل الله</li>
            <li>دعا قومه لترك عبادة الأصنام</li>
            <li>ألقي في النار ولم تضره بأمر الله</li>
            <li>بنى الكعبة مع ابنه إسماعيل</li>
            <li>ابتلاه الله بذبح ابنه إسماعيل وفداه بكبش عظيم</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "5",
      label: "موسى عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>كليم الله وأحد أولي العزم من الرسل</li>
            <li>أرسله الله إلى فرعون وقومه</li>
            <li>شق الله له البحر ونجا بني إسرائيل</li>
            <li>أنزل الله عليه التوراة</li>
            <li>اشتهر بقوته وشجاعته في الحق</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "6",
      label: "عيسى عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>رسول الله وكلمته ألقاها إلى مريم</li>
            <li>ولد من غير أب بمعجزة من الله</li>
            <li>دعا بني إسرائيل لعبادة الله</li>
            <li>أنزل الله عليه الإنجيل</li>
            <li>رفعه الله إلى السماء وسيعود في آخر الزمان</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "7",
      label: "محمد ﷺ",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>خاتم الأنبياء والمرسلين</li>
            <li>بعثه الله رحمة للعالمين</li>
            <li>أنزل عليه القرآن الكريم</li>
            <li>هاجر إلى المدينة وأسس الدولة الإسلامية</li>
            <li>ترك أمته على المحجة البيضاء</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "8",
      label: "هود عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أرسل إلى قوم عاد</li>
            <li>دعاهم إلى عبادة الله وترك الغرور بقوتهم</li>
            <li>كذبوه فأهلكهم الله بالريح العقيم</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "9",
      label: "صالح عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أرسل إلى قوم ثمود</li>
            <li>دعاهم إلى عبادة الله وحده</li>
            <li>آتاه الله معجزة الناقة</li>
            <li>كذبوه وقتلوا الناقة فأهلكهم الله بالصيحة</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "10",
      label: "لوط عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أرسل إلى قوم لوط</li>
            <li>دعاهم لترك الفواحش</li>
            <li>كذبوه فأنزل الله عليهم عذابًا مهلكًا</li>
            <li>نجى لوط وأهله المؤمنين</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "11",
      label: "إسماعيل عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابن إبراهيم عليه السلام</li>
            <li>شارك في بناء الكعبة</li>
            <li>عرف بالصبر والتضحية</li>
            <li>نبي للعرب وبُعث في مكة</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "12",
      label: "إسحاق عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابن إبراهيم عليه السلام</li>
            <li>نبي من أنبياء بني إسرائيل</li>
            <li>والد يعقوب عليه السلام</li>
            <li>عرف بالعبادة والتقوى</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "13",
      label: "يعقوب عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>يعرف بإسرائيل وهو أبو بني إسرائيل</li>
            <li>أبناؤه الاثنا عشر هم أسباط بني إسرائيل</li>
            <li>ابتلاه الله بفقدان يوسف عليه السلام</li>
            <li>عرف بالصبر والثبات</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "14",
      label: "يوسف عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابن يعقوب عليه السلام</li>
            <li>عرف بجماله وحكمته</li>
            <li>تعرض لمكائد إخوته وسُجن ظلمًا</li>
            <li>أصبح عزيز مصر وحكم بالعدل</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "15",
      label: "أيوب عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>عرف بالصبر على الابتلاء</li>
            <li>ابتلاه الله بفقدان ماله وأهله وصحته</li>
            <li>ظل ثابتًا على عبادة الله</li>
            <li>شفاه الله وردّ عليه نعمه</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "16",
      label: "شعيب عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أرسل إلى أهل مدين</li>
            <li>دعاهم لعبادة الله وترك الغش في الكيل والميزان</li>
            <li>كذبوه فأهلكهم الله بعذاب يوم الظلة</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "17",
      label: "داود عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>نبي وملك من ملوك بني إسرائيل</li>
            <li>آتاه الله الحكمة وصوتًا جميلًا</li>
            <li>أنزل الله عليه الزبور</li>
            <li>اشتهر بقوته وشجاعته</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "18",
      label: "سليمان عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابن داود عليه السلام</li>
            <li>آتاه الله ملكًا عظيمًا</li>
            <li>سخّر الله له الجن والرياح</li>
            <li>عرف بحكمته وعدله</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "19",
      label: "يونس عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أرسل إلى قوم نينوى</li>
            <li>ابتلعه الحوت بعدما ترك قومه</li>
            <li>دعاء "لا إله إلا أنت سبحانك إني كنت من الظالمين"</li>
            <li>نجاه الله واستجاب دعاءه</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "20",
      label: "زكريا عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>نبي من أنبياء بني إسرائيل</li>
            <li>ابتلاه الله بعدم الإنجاب</li>
            <li>رزقه الله يحيى عليه السلام بعد دعاء طويل</li>
            <li>عرف بزهده وورعه</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "21",
      label: "يحيى عليه السلام",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابن زكريا عليه السلام</li>
            <li>عرف بالعبادة والطهارة منذ صغره</li>
            <li>كان داعيًا للحق ومحبوبًا بين قومه</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
  ];
  
  